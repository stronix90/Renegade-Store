import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB7gBzh9S7dtcskdRQlgJ8vUn7TFr0jMEg",
    authDomain: "renegade-store.firebaseapp.com",
    projectId: "renegade-store",
    storageBucket: "renegade-store.appspot.com",
    messagingSenderId: "893173362180",
    appId: "1:893173362180:web:b9806a2ed38977d1ee0f51"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
