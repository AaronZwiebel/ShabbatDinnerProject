var app_fireBase = {};
(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAsU5IPYtdd05tXizigylUOKdDc0IZ582o",
        authDomain: "shabbat-dinner.firebaseapp.com",
        databaseURL: "https://shabbat-dinner.firebaseio.com",
        projectId: "shabbat-dinner",
        storageBucket: "shabbat-dinner.appspot.com",
        messagingSenderId: "95728165424",
        appId: "1:95728165424:web:5cc7c02ce743db13b583f5",
        measurementId: "G-VDTH3R3F3Y"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    app_fireBase = firebase;
})()