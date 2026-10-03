importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB49W61ggHHJcAJ5WyYTmX13I8NofsggSY",
  authDomain: "olympiad-portal-d2a5e.firebaseapp.com",
  projectId: "olympiad-portal-d2a5e",
  storageBucket: "olympiad-portal-d2a5e.firebasestorage.app",
  messagingSenderId: "341855557503",
  appId: "1:341855557503:web:5cb0c3a9ee424a6db0ec4a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  
  // If payload does NOT include a 'notification' object, show manually:
  if (!payload.notification) {
    const title = payload.data?.title || "🚨 WhatsApp Human Handover Request!";
    const options = {
      body: payload.data?.body || "Student requested support. Tap to reply!",
      icon: "https://olympiadquiz.org/favicon.png",
      badge: "https://olympiadquiz.org/favicon.png",
      vibrate: [500, 200, 500, 200, 800],
      requireInteraction: true,
      tag: payload.data?.handoverId ? ("wam-handover-" + payload.data.handoverId) : "handover-alert",
      renotify: true,
      data: {
        url: payload.data?.url || "/admin.html?tab=ai"
      }
    };
    return self.registration.showNotification(title, options);
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/admin.html?tab=ai';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(windowClients) {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url.indexOf(urlToOpen) >= 0 && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(urlToOpen);
    })
  );
});