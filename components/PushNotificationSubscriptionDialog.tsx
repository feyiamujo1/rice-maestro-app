import { useState } from "react";

import { saveSubscription, subscribePush } from "~/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";

export default function PushNotificationSubDialog({
  showPushNotificationDialog,
  setShowPushNotificationDialog,
  serviceWorkerRegistration,
}: {
  showPushNotificationDialog: boolean;
  setShowPushNotificationDialog: Function;
  serviceWorkerRegistration: ServiceWorkerRegistration | null;
}) {
  const [disable, setDisable] = useState(false);

  return (
    <AlertDialog open={showPushNotificationDialog}>
      <AlertDialogContent className="max-w-[365px] gap-y-2 rounded-lg sm:max-w-[600px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Enable Push Notifications</AlertDialogTitle>
          <AlertDialogDescription>
            Stay updated and never miss out on important updates! Enable push
            notifications to receive real-time alerts through your browser.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="border-none bg-red-500 text-white outline-0 ring-0 hover:bg-[#999999] hover:text-white focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
            disabled={disable}
            onClick={() => {
              setShowPushNotificationDialog(false);
            }}
          >
            No, thanks
          </AlertDialogCancel>
          <AlertDialogAction
            className="border-none text-white outline-none hover:bg-custom-hover-green"
            disabled={disable}
            onClick={() => {
              setDisable(true);
              Notification.requestPermission().then(async (permission) => {
                setShowPushNotificationDialog(false);
                setDisable(false);

                if (permission === "granted") {
                  const sub = await subscribePush(serviceWorkerRegistration!);

                  await saveSubscription(sub);
                }
              });
            }}
          >
            Enable
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
