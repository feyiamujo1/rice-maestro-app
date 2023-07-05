import { NextResponse } from "next/server";
import { uuid } from "@sanity/uuid";
import argon2 from "argon2";

import client from "~/lib/sanity";

export const POST = async (request: Request) => {
  const { email, password, ...body } = await request.json();
  try {
    const user = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      {
        email,
      }
    );

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 401 }
      );
    }

    const newUser = await client.create({
      _type: "user",
      _id: `user.${uuid()}`,
      email,
      password: await argon2.hash(password),
      ...body,
    });

    return NextResponse.json({ message: "User created", user: newUser });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { message: "Unsuccessful", error: error.message },
      { status: 500 }
    );
  }
};
