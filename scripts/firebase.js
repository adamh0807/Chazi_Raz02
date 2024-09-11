import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import {
    getAuth,
    GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe6iecgIKK3cxKbfo2aVpKhawD16yqOUE",
  authDomain: "working-vision-bot.firebaseapp.com",
  projectId: "working-vision-bot",
  storageBucket: "working-vision-bot.appspot.com",
  messagingSenderId: "1045535165571",
  appId: "1:1045535165571:web:6eb81eba6236a1d42f9fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

let secretKey;

fetch('test/secret_code.txt')
    .then((response) => response.text())
    .then((data) => {
        secretKey = data.trim();
    })
    .catch((error) => {
        console.error('אירעה שגיאה בקריאת הקובץ:', error);
    });

export { auth, firestore, storage, provider, secretKey };
