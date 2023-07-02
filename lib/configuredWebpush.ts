import webPush from "web-push";

const vapidPublicKey = process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY || "";
const vapidPrivateKey = process.env.WEB_PUSH_PRIVATE_KEY || "";

if (vapidPublicKey === "" || vapidPrivateKey === "") {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:"
  );
  console.log(webPush.generateVAPIDKeys());
} else {
  webPush.setVapidDetails(
    "mailto:email@outlook.com",
    vapidPublicKey,
    vapidPrivateKey
  );
}

export default webPush;
