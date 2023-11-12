import firebase from "firebase/compat/app";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmaQMU0aYfwDo9OIpvVDLn-fuzPViWcKc",
  authDomain: "murash-shop.firebaseapp.com",
  databaseURL: "https://murash-shop-default-rtdb.firebaseio.com",
  projectId: "murash-shop",
  storageBucket: "murash-shop.appspot.com",
  messagingSenderId: "476600713955",
  appId: "1:476600713955:web:e499cc5fe040e7cd7cfbd6",
  measurementId: "G-98MELW5QJ0",
};

const app = firebase.initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();

export const db = firebase.firestore(app);
