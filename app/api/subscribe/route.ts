import { NextResponse } from "next/server";

import client from "~/lib/sanity";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const exists = await client.fetch(
      `*[_type == "subscription" && endpoint == $endpoint][0]`,
      {
        endpoint: body.subscription.endpoint,
      }
    );

    if (exists) {
      return NextResponse.json({
        message: "Already subscribed",
      });
    }

    await client.create({
      _type: "subscription",
      endpoint: body.subscription.endpoint,
      keys: body.subscription.keys,
    });

    return NextResponse.json({
      message: "Subscription successful",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
