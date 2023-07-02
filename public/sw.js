"use strict";

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(clients.claim());
});

self.addEventListener("push", async function (event) {
  const notification = event.data ? event.data.json() : {
    title: "New Content",
    excerpt: "You have a new notification",
  };
  
  // console.log("Push Notification received", notification)
  event.waitUntil(
    registration.showNotification(notification.title || "Hello", {
      body: notification.excerpt || "You have a new notification",
      icon: "profile.jpg",
      data: {
        url: `/${notification?.slug?.current}` || "/",
      }
    })
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then(function (clientList) {
        if (clientList.length > 0) {
          let client = clientList[0];
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i];
            }
          }
          return client.focus();
        }
        return clients.openWindow(`${event.notification.data.url}`);
      })
  );
});

// self.addEventListener('pushsubscriptionchange', function(event) {
//   event.waitUntil(
//       Promise.all([
//           Promise.resolve(event.oldSubscription ? deleteSubscription(event.oldSubscription) : true),
//           Promise.resolve(event.newSubscription ? event.newSubscription : subscribePush(registration))
//               .then(function(sub) { return saveSubscription(sub) })
//       ])
//   )
// })
