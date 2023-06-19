"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showCurrentForm, setShowCurrentForm] = useState("login");

  return (
    <div className="relative m-0 w-full p-0">
      <nav className="inset-x-0 top-0 z-50 w-full bg-white py-2 shadow-md md:absolute">
        <div className="mx-auto w-11/12">
          <div className="flex items-center gap-0.5">
            <Image
              width={70}
              height={60}
              src="/images/wheat-14.jpg"
              className=" object-fill"
              alt="logo"
            />
            <p className="flex flex-col -space-y-1 text-primary">
              <span>Rice</span>
              <span>Meastro</span>
            </p>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
}
