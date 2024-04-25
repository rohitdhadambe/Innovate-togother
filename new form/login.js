import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  // Your Firebase configuration...
  apiKey: "AIzaSyCsPP6vbC4H5TtITXibK1zOFqx4OYyM8qQ",
  authDomain: "signup-signin-bc1bf.firebaseapp.com",
  projectId: "signup-signin-bc1bf",
  storageBucket: "signup-signin-bc1bf.appspot.com",
  messagingSenderId: "724846968402",
  appId: "1:724846968402:web:f69ef3c778557f86a7a98b",
  measurementId: "G-G5ZQTT0ZCK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User logged in:', user);
      alert('Login successful!');
      // Optionally, redirect user to a different page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
