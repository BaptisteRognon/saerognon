import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMeAFB7gjvaTycQLVdG2a8xr0L5rhIxvw",
    authDomain: "sae-lys.firebaseapp.com",
    projectId: "sae-lys",
    storageBucket: "sae-lys.appspot.com",
    messagingSenderId: "806617429626",
    appId: "1:806617429626:web:76fee2e941b523e3f1adc3",
    measurementId: "G-SH6YR8N6YF"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);



const app = createApp(App)

app.use(router)

app.mount('#app')
