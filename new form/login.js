import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5m22OEi-oH9xw0IdBNaVlh9u1SIJWk6w",
  authDomain: "inovate-togother.firebaseapp.com",
  projectId: "inovate-togother",
  storageBucket: "inovate-togother.firebasestorage.app",
  messagingSenderId: "597658265743",
  appId: "1:597658265743:web:a14ec21ad12ac747dea8fa"
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
