import { BellRing, Check } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Notification } from "~/types/Notification";

export function NotificationCard({
  notifications,
  showNotificationDropdown,
  setShowNotificationDropdown,
}: {
  notifications: Notification[];
  showNotificationDropdown: Boolean;
  setShowNotificationDropdown: Function;
}) {
  return (
    <Card className={cn("w-full border-none py-0 shadow-none outline-none")}>
      <CardHeader className="px-0 py-2">
        <CardTitle className="mb-0 flex items-center gap-2 p-0">
          <BellRing />
          Notifications
        </CardTitle>
        <CardDescription>
          You have {notifications.length} new notification
          {notifications.length > 1 ? "s" : ""}.
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("grid gap-1.5 border-t p-0 py-1.5 ", notifications.length > 4 && "border-b border-slate-200 max-h-[220px] overflow-y-scroll")}>
        <div>
          {notifications.map((notification, index) => (
            <div key={index}>
              <Link
                onClick={() => {
                  setShowNotificationDropdown(false);
                }}
                className=" grid cursor-pointer grid-cols-[25px_1fr] items-start rounded-md border-b border-b-white px-1 py-2 transition-all hover:scale-95 hover:border-b-custom-green hover:bg-slate-50"
                href={
                  notification.slug === "dashboard"
                    ? "/"
                    : `/${notification.slug}`
                }
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-custom-green" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.source + " was " + notification.action + "d"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Click here to view now!
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-0 pb-1">
        <Button
          onClick={() => {
            setShowNotificationDropdown(false);
          }}
          className={cn("mx-0 w-full text-white active:bg-custom-hover-green md:hover:bg-custom-hover-green ", notifications.length > 4 && "mt-3")}
        >
          <Check className="mr-2 h-4 w-4 " /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
