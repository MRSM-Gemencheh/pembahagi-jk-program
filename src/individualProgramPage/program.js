import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_ow3SQ-q23fH6a0-uRx5C_VhemrAHRI8",
    authDomain: "e-pengurusan-technova.firebaseapp.com",
    projectId: "e-pengurusan-technova",
    storageBucket: "e-pengurusan-technova.appspot.com",
    messagingSenderId: "103182397041",
    appId: "1:103182397041:web:8aff5a3a06b8e1d758b5d0",
    measurementId: "G-5GNDNEVXMJ"
};


document.addEventListener('DOMContentLoaded', function () {

    const programName = document.getElementById('programName');


    return programName
});

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();



auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in, you can access the user object
    console.log(user);

    // welcomeText.textContent = "Selamat datang! Berjaya log masuk sebagai: " + user.displayName
    userName.textContent = user.displayName

    signInButton.style.display = "none"
    signOutButton.style.display = "block"
  } else {
    // User is signed out
    console.log("User is not logged in");
  }
});



const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);


const docID = urlParams.get('docID')
console.log(docID);