export const regSW = async () => {
  // load service worker
  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker.register("/sw.js");

    const registration = await navigator.serviceWorker.ready;

    return registration;
  }
};
