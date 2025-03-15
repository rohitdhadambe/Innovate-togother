import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {createUserWithEmailAndPassword, getAuth} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

function register() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User created:', user);
            alert('User created successfully!');
            // Optionally, redirect user to another page or perform other actions
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.getElementById('signup-button');
    signupButton.addEventListener('click', register);
});
