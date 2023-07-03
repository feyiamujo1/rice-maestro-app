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
            className="border-none bg-red-500 text-white outline-0 ring-0 hover:bg-[#999999] hover:text-white focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
            onClick={() => setShowPushNotificationDialog(false)}
          >
            Disable
          </AlertDialogCancel>
          <AlertDialogAction
            className="border-none text-white outline-none hover:bg-custom-hover-green"
            onClick={() => setShowPushNotificationDialog(false)}
          >
            Enable
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
