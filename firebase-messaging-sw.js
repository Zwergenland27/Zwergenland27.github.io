importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyC4QaRTTd-ZokKkRNC7Jn5ivBMMJqBCNIk",
    authDomain: "housecall-5f6bd.firebaseapp.com",
    projectId: "housecall-5f6bd",
    storageBucket: "housecall-5f6bd.appspot.com",
    messagingSenderId: "1076373306124",
    appId: "1:1076373306124:web:96d26e5d04389346e16729",
    measurementId: "G-2GSLVPC3CX"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log("background, ", payload);
})