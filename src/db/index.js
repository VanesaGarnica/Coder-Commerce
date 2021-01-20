import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVbjGXjzAICpZ-RgUetdkHUae6YNSdMq4",
    authDomain: "coderhouse-cathero.firebaseapp.com",
    projectId: "coderhouse-cathero",
    storageBucket: "coderhouse-cathero.appspot.com",
    messagingSenderId: "931806277245",
    appId: "1:931806277245:web:31afd06e8ea8fbf4a78b14"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}