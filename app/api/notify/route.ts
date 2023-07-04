import { NextResponse } from "next/server";
import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

import webPush from "~/lib/configuredWebpush";
import client from "~/lib/sanity";

const secret = process.env.WEBHOOK_SECRET as string;

export async function POST(request: Request) {
  const body = await request.json();
  const signature = request.headers.get(SIGNATURE_HEADER_NAME) || "";

  if (!isValidSignature(JSON.stringify(body), signature, secret)) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  try {
    const subscriptions = await client.fetch(`*[_type == "subscription"]`);
    const action = body.triggeredBy;
    const title =
      action === "update"
        ? `${body.name} was updated`
        : `${body.name} was created`;

    // Create a new notification document
    const newNotification = {
      source: title,
      slug: body.slug,
      created_at: Date.now(),
    };

    console.log(newNotification)

    await Promise.all([
      subscriptions.map((subscription: any) => {
        return webPush.sendNotification(
          subscription,
          JSON.stringify({
            ...body,
            title,
          })
        );
      }),
      // Adding new notification
      await client.create({ _type: "notification", ...newNotification }),
      console.log(newNotification)
    ]);

    return NextResponse.json({ message: "Notification sent" });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      { message: "Unsuccessful", error: err.message },
      { status: 500 }
    );
  }
}
