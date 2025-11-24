// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc_b73lE-_XBjw4CnHzKvopeKCid0AzJc",
  authDomain: "revista-c59b8.firebaseapp.com",
  projectId: "revista-c59b8",
  storageBucket: "revista-c59b8.firebasestorage.app",
  messagingSenderId: "275495484100",
  appId: "1:275495484100:web:efe13b0153d361728b2791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db, getAuth };