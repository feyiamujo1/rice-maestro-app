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
}: {
  showPushNotificationDialog: boolean;
  setShowPushNotificationDialog: Function;
}) {
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
            className="border-none ring-0 outline-0 focus:ring-0 bg-red-500 hover:bg-[#999999] text-white hover:text-white focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0"
            onClick={() => setShowPushNotificationDialog(false)}
          >
            Disable
          </AlertDialogCancel>
          <AlertDialogAction
            className="text-white hover:bg-custom-hover-green border-none outline-none"
            onClick={() => setShowPushNotificationDialog(false)}
          >
            Enable
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
