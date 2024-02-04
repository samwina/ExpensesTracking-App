import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkb94coaMsVbVPouThjRvvkVn8GFN2xOQ",
    authDomain: "myxpenses-10696.firebaseapp.com",
    projectId: "myxpenses-10696",
    storageBucket: "myxpenses-10696.appspot.com",
    messagingSenderId: "734673593059",
    appId: "1:734673593059:web:3da68860e35a8e6c1adbd6"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp}
