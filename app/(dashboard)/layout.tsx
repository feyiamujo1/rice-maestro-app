import Image from "next/image";
import Link from "next/link";
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
import SideBar from "~/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative m-0 flex max-h-screen w-full bg-[#f9fafb] p-0">
      <nav className="absolute inset-x-0 top-0 z-50 w-full bg-white py-2 shadow-md">
        <div className="mx-auto flex w-11/12 justify-between">
          <div className="flex items-center gap-0.5">
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
            <div className="group flex h-12 w-12 cursor-pointer items-center overflow-hidden rounded-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    src="/images/default_profile.png"
                    className="rounded-full object-cover object-center group-hover:scale-125"
                    alt="profile"
                    width={55}
                    height={55}
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
        </div>
      </nav>
      <div className=" mr-2 flex h-full w-full gap-2 md:mr-4 md:gap-4">
        <SideBar />
        <main className="w-full bg-white px-2 pt-[90px] shadow-lg md:px-6">
          <div className="py-4 ">{children}</div>
        </main>
      </div>
    </div>
  );
}
