import { LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBellFill } from "react-icons/bs";
import SideBar from "~/components/Sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative m-0 w-full p-0 max-h-screen flex bg-[#f9fafb]">
      <nav className="inset-x-0 top-0 z-50 w-full bg-white py-2 shadow-md md:absolute">
        <div className="mx-auto w-11/12 flex justify-between">
          <div className="flex items-center gap-0.5">
            <Image
              width={70}
              height={60}
              src="/images/wheat-14.jpg"
              className=" object-fill"
              alt="logo"
            />
            <p className="flex flex-col font-medium -space-y-1 text-primary">
              <span>Rice</span>
              <span>Meastro</span>
            </p>
          </div>
          <div className="w-fit flex gap-3 items-center">
            <div className="w-fit flex items-center relative cursor-pointer group">
              <BsFillBellFill className="text-2xl fill-custom-green group-hover:fill-custom-hover-green" />
              <span className="text-white text-xs bg-red-600 rounded-full py-0.5 px-1.5 absolute -top-3 -right-2">2</span>
            </div>
            <div className="rounded-full h-12 w-12 flex items-center cursor-pointer group overflow-hidden">
              <DropdownMenu > 
                <DropdownMenuTrigger asChild >
                  <Image src="/images/default_profile.png" className="object-cover group-hover:scale-125 object-center rounded-full" alt="profile" width={55} height={55} /> 
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-2">
                  <DropdownMenuLabel className=" whitespace-normal break-words">
                    Feyisayo Amujoyegbe
                    <br></br>
                    feyisayoamujoyegbe@gmail.com
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className=" cursor-pointer focus:text-white focus:bg-custom-green">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" cursor-pointer focus:text-white focus:bg-custom-green">
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
      <div className=" h-full w-full flex gap-4 mr-4">
        <SideBar />
        <main className="pt-[90px] bg-white shadow-lg w-full px-6">
          
          <div className="py-4 ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
