// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAc_b73lE-_XBjw4CnHzKvopeKCid0AzJc',
    authDomain: 'revista-c59b8.firebaseapp.com',
    projectId: 'revista-c59b8',
    storageBucket: 'revista-c59b8.firebasestorage.app',
    messagingSenderId: '275495484100',
    appId: '1:275495484100:web:efe13b0153d361728b2791',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(app)

// Initialize Auth
const auth = getAuth(app)

// exportaciones
export { app, db, auth }
