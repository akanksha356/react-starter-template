// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firbase/auth";
import { getFirestore } from "firbase/firestore";
import { getStorage } from "firbase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt7HXiNS8SjMkcwXucYtLcz8jGJHbMS2c",
  authDomain: "eshop-18dba.firebaseapp.com",
  projectId: "eshop-18dba",
  storageBucket: "eshop-18dba.appspot.com",
  messagingSenderId: "159064346409",
  appId: "1:159064346409:web:c74f99f33155f9e1ce7138",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
