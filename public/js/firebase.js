let firebaseConfig = {
    // Enter your firebase credentials
     apiKey: "AIzaSyBtdH3DP85UDOA_Yrot9mYHlZGz3ctw2MY",
    authDomain: "tech-website-def0e.firebaseapp.com",
    projectId: "tech-website-def0e",
    storageBucket: "tech-website-def0e.appspot.com",
    messagingSenderId: "571097362080",
    appId: "1:571097362080:web:9d2edf2f989823030ca3c5",
    measurementId: "G-KF013MXF8L"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
