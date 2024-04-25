
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCsPP6vbC4H5TtITXibK1zOFqx4OYyM8qQ",
    authDomain: "signup-signin-bc1bf.firebaseapp.com",
    projectId: "signup-signin-bc1bf",
    storageBucket: "signup-signin-bc1bf.appspot.com",
    messagingSenderId: "724846968402",
    appId: "1:724846968402:web:f69ef3c778557f86a7a98b",
    measurementId: "G-G5ZQTT0ZCK"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = getAuth(app);

function login() {
  var email = document.getElementById('login-email').value;
 var password = document.getElementById('login-password').value;
console.log(email);
console.log(password);

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    alert('User successfully Login!');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}

login();







// function register() {
//     var email = document.getElementById('login-email').value;
//     var password = document.getElementById('login-password').value;
//     console.log(email, password);
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log('User created:', user);
//             alert('User created successfully!');
//             // Optionally, redirect user to another page or perform other actions
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
//         });
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const signupButton = document.getElementById('login-button');
//     signupButton.addEventListener('click', register);
// });
