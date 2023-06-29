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

const notifications = [
  {
    title: "Pests & Diseases Control",
    description: "New Post, View Now!",
    section: ""
  },
  {
    title: "Storage Processes",
    description: "New Post, View Now!",
    section: "storage-processes"
  },
  {
    title: "Fertilizer Information",
    description: "New Post, View Now!",
    section: "fertilizer-information"
  },
  {
    title: "Market Information",
    description: "New Post, View Now!",
    section: "fertilizer-information"
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function NotificationCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full outline-none border-none shadow-none py-0", className)} {...props}>
      <CardHeader className="px-0">
        <CardTitle className="flex gap-2 items-center p-0 mb-0">
          <BellRing />
          Notifications
        </CardTitle>
        <CardDescription>You have 4 new notifications.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1.5 p-0 border-t py-2.5">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
            >
                <Link className=" grid grid-cols-[25px_1fr] items-start rounded-md border-b border-b-white hover:border-b-custom-green py-2 cursor-pointer hover:bg-slate-50 hover:scale-95 px-1 transition-all" href={`/${notification.section}`}>
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
        <Button className="w-full text-white active:bg-custom-hover-green md:hover:bg-custom-hover-green mx-0 mt-1.5 ">
          <Check className="mr-2 h-4 w-4 " /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
