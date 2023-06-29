"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { LogOut, User } from "lucide-react";
import { BsFillBellFill } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { ToastWithAction } from "~/components/CustomToast";
import SideBar from "~/components/Sidebar";

// import { Toast } from "~/components/ui/toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" m-0 flex min-h-screen w-full bg-[#f9fafb] p-0">
      <nav className="fixed inset-x-0 top-0 z-50 w-full bg-white py-2 shadow-md">
        <div className="mx-auto flex w-[96%] justify-between md:w-11/12">
          <div className="flex items-center md:hidden">
            <Hamburger
              size={28}
              toggled={isOpen}
              toggle={setIsOpen}
              color="#2c963f"
              distance="md"
              duration={0.3}
              rounded
            />
          </div>
          <div className="hidden items-center gap-0.5 md:flex">
            <Image
              width={70}
              height={60}
              src="/images/wheat-14.jpg"
              className=" object-fill"
              alt="logo"
            />
            <p className="flex flex-col -space-y-1 font-medium text-primary">
              <span>Rice</span>
              <span>Meastro</span>
            </p>
          </div>
          <div className="flex w-fit items-center gap-3">
            <div className="group relative flex w-fit cursor-pointer items-center">
              <BsFillBellFill className="fill-custom-green text-2xl group-hover:fill-custom-hover-green" />
              <span className="absolute -right-2 -top-3 rounded-full bg-red-600 px-1.5 py-0.5 text-xs text-white">
                2
              </span>
            </div>
            <div className="group relative flex h-12 w-12 cursor-pointer items-center rounded-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    src="/images/default_profile.png"
                    className="relative w-20 rounded-full object-cover object-center group-hover:scale-110 md:w-[55px]"
                    alt="profile"
                    width={55}
                    height={55}
                    style={{ width: "auto" }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-2 w-56">
                  <DropdownMenuLabel className=" whitespace-normal break-words">
                    Feyisayo Amujoyegbe
                    <br></br>
                    feyisayoamujoyegbe@gmail.com
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className=" cursor-pointer focus:bg-custom-green focus:text-white">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" cursor-pointer focus:bg-custom-green focus:text-white">
                      <Link className="flex" href="/login">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <ToastWithAction />
        </div>
      </nav>
      <div className="relative flex w-full gap-2 md:gap-4">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="w-full bg-white px-2 pb-10 pt-[90px] shadow-lg md:ml-[338px] md:px-6 ">
          <div className="py-4">{children}</div>
          {/* <Toast /> */}
        </main>
      </div>
    </div>
  );
}
