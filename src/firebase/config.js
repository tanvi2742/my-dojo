import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-2psnAqyH1k_w6CFelb-AMRRiG1vcaQQ",
  authDomain: "mydojosite-75251.firebaseapp.com",
  projectId: "mydojosite-75251",
  storageBucket: "mydojosite-75251.appspot.com",
  messagingSenderId: "508830338075",
  appId: "1:508830338075:web:f3d2da78d0bd25d8947cbe",
};

//init firebse
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
