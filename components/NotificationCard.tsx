import Link from "next/link";
import { BellRing, Check } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const notifications = [
  {
    title: "Pests & Diseases Control",
    description: "New Post, View Now!",
    section: "",
  },
  {
    title: "Storage Processes",
    description: "New Post, View Now!",
    section: "storage-processes",
  },
  {
    title: "Fertilizer Information",
    description: "New Post, View Now!",
    section: "fertilizer-information",
  },
  {
    title: "Market Information",
    description: "New Post, View Now!",
    section: "fertilizer-information",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function NotificationCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        "w-full border-none py-0 shadow-none outline-none",
        className
      )}
      {...props}
    >
      <CardHeader className="px-0">
        <CardTitle className="mb-0 flex items-center gap-2 p-0">
          <BellRing />
          Notifications
        </CardTitle>
        <CardDescription>You have 4 new notifications.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1.5 border-t p-0 py-2.5">
        <div>
          {notifications.map((notification, index) => (
            <div key={index}>
              <Link
                className=" grid cursor-pointer grid-cols-[25px_1fr] items-start rounded-md border-b border-b-white px-1 py-2 transition-all hover:scale-95 hover:border-b-custom-green hover:bg-slate-50"
                href={`/${notification.section}`}
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-custom-green" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-0">
        <Button className="mx-0 mt-1.5 w-full text-white active:bg-custom-hover-green md:hover:bg-custom-hover-green ">
          <Check className="mr-2 h-4 w-4 " /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
