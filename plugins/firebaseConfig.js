import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {

    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()