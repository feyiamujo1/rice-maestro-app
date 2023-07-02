import { NextResponse } from "next/server";
import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

import webPush from "~/lib/configuredWebpush";
import client from "~/lib/sanity";

// const secret = process.env.WEBHOOK_SECRET as string;
const secret =
  "d4b118d943bc1ac80788c51ffbebbdeececd4754ec355a851baa5fd81a05ad06";

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
      action === "update" ? `${body.name} updated` : `${body.name} created`;

    await Promise.all(
      subscriptions.map((subscription: any) => {
        return webPush.sendNotification(
          subscription,
          JSON.stringify({
            ...body,
            title,
          })
        );
      })
    );

    return NextResponse.json({ message: "Notification sent" });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      { message: "Unsuccessful", error: err.message },
      { status: 500 }
    );
  }
}
