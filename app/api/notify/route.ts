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
    // action is either "create", "update" or "delete"
    const action = body.triggeredBy;
    const title =
      action === "update"
        ? `${body.name} content updated`
        : `${body.name} content created`;

    // create notification
    await client.create({
      _type: "notification",
      action,
      section: {
        _type: "reference",
        _ref: body._id,
      },
    });

    // fetch all subscriptions
    const subscriptions = await client.fetch(`*[_type == "subscription"]`);

    // send notification to all subscriptions
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
