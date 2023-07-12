"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { ToastWithAction } from "~/components/CustomToast";
import { Squash as Hamburger } from "hamburger-react";
import { LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { BsFillBellFill } from "react-icons/bs";
import { getNotification } from "~/sanity/sanity-utils";

import { regSW } from "~/lib/regSW";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { NotificationCard } from "~/components/NotificationCard";
import PushNotificationSubDialog from "~/components/PushNotificationSubscriptionDialog";
import SideBar from "~/components/Sidebar";

// import { Toast } from "~/components/ui/toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [serviceWorkerRegistration, setServiceWorkerRegistration] =
    useState<ServiceWorkerRegistration | null>(null);
  const [showPushNotificationDialog, setShowPushNotificationDialog] =
    useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  const [notifications, setNotifications] = useState<any>([]);

  const logout = async () => {
    setLoading(true);
    try {
      const data = await signOut({ redirect: false, callbackUrl: "/login" });

      router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const { data: session } = useSession();
  // const notification = await getNotification();
  // console.log(notification);

  useEffect(() => {
    regSW().then((registration) => {
      if (registration) {
        setServiceWorkerRegistration(registration);
      }

      if (Notification.permission === "default") {
        setShowPushNotificationDialog(true);
      }
    });
  }, []);

  useEffect(() => {
    async function retrieveNotification() {
      const response = await getNotification();
      setNotifications(response);
    }
    retrieveNotification();
  }, []);

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
            {/* <Image
              width={70}
              height={60}
              src="/images/wheat-14.jpg"
              className=" object-fill"
              alt="logo"
            /> */}
            <p className="flex flex-col -space-y-1 font-medium text-primary">
              <span>Rice</span>
              <span>Maestro</span>
            </p>
          </div>
          <div className="flex w-fit items-center gap-3">
            <Dialog open={showNotificationDropdown}>
              <DialogTrigger>
                <div
                  className="group relative flex w-fit cursor-pointer items-center"
                  onClick={() => {
                    setShowNotificationDropdown(true);
                  }}
                >
                  <BsFillBellFill className="fill-custom-green text-2xl group-hover:fill-custom-hover-green" />
                  {notifications?.length > 0 ? (
                    <span className="absolute -right-2 -top-3 rounded-full bg-red-600 px-1.5 py-0.5 text-xs text-white">
                      {notifications?.length}
                    </span>
                  ) : null}
                </div>
              </DialogTrigger>
              <DialogContent
                className="max-w-[365px] gap-y-2 rounded-lg sm:max-w-[425px]"
                // @ts-ignore
                onClose={() => {
                  setShowNotificationDropdown(false);
                }}
              >
                <NotificationCard
                  notifications={notifications}
                  showNotificationDropdown={showNotificationDropdown}
                  setShowNotificationDropdown={setShowNotificationDropdown}
                />
              </DialogContent>
            </Dialog>
            <div className="group relative flex h-12 w-12 cursor-pointer items-center overflow-hidden rounded-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    src="/images/default_profile.png"
                    className="relative w-20 rounded-full object-cover object-center group-hover:scale-110 md:w-[55px]"
                    alt="profile"
                    width={55}
                    height={55}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-2 w-56">
                  <DropdownMenuLabel className=" whitespace-normal break-words">
                    {session?.user?.name}
                    <br></br>
                    {session?.user?.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full items-center justify-start bg-white px-1.5 text-left text-black hover:bg-custom-green hover:text-white active:bg-custom-hover-green">
                          <User className="mr-2 h-4 w-4" />
                          <span>Edit Profile</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[365px] gap-y-2 rounded-lg sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogDescription className="pt-3 text-left text-base text-custom-green">
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="name" className="text-left">
                              Full Name
                            </Label>
                            <Input id="name" className="col-span-3" required />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="username" className="text-left">
                              Phone
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              className="col-span-3"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="password" className="text-left">
                              New Password
                            </Label>
                            <Input
                              id="phone"
                              type="password"
                              className="col-span-3"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="username" className="text-left">
                              Confirm Password
                            </Label>
                            <Input
                              id="phone"
                              type="password"
                              className="col-span-3"
                              required
                            />
                          </div>
                        </div>
                        <DialogFooter className=" flex flex-row items-center justify-end gap-4">
                          <Button
                            type="submit"
                            className="text-white hover:bg-custom-hover-green"
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem className=" cursor-pointer py-2 focus:bg-custom-green focus:text-white">
                      <Button
                        className="h-auto bg-transparent p-0 hover:bg-transparent"
                        onClick={logout}
                        variant="ghost"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
      <PushNotificationSubDialog
        serviceWorkerRegistration={serviceWorkerRegistration}
        showPushNotificationDialog={showPushNotificationDialog}
        setShowPushNotificationDialog={setShowPushNotificationDialog}
      />
      <div className="relative flex w-full gap-2 md:gap-4">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="w-full bg-white px-2 pb-10 pt-[90px] shadow-lg md:ml-[338px] md:px-6 ">
          <div className="py-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
