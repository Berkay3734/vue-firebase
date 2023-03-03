

import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAWywlEyEalZSf--350izkvyF2uJfIryjQ",
    authDomain: "sosyal-app-5dc32.firebaseapp.com",
    projectId: "sosyal-app-5dc32",
    storageBucket: "sosyal-app-5dc32.appspot.com",
    messagingSenderId: "683065366716",
    appId: "1:683065366716:web:f6dc0ce6e1a188800958b9"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}