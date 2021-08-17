import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBG-kb-Uw93GoGrVMlH2G-ZAALbYJ7PQtU",
        // authDomain: "fact-finder-app.firebaseapp.com",
        // databaseURL: "fact-finder-app.firebaseio.com",
        projectId: "fact-finder-app",
        storageBucket: "fact-finder-app.appspot.com",
        messagingSenderId: "671482455594",
        appId: "1:671482455594:web:563dc794751a147167c553",
        measurementId: "G-WN05ZMGNTN"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()