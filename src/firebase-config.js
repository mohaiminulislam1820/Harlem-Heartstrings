import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: VITE_apiKey,
    authDomain: VITE_authDomain,
    projectId: VITE_projectId,
    storageBucket: VITE_storageBucket,
    messagingSenderId: VITE_messagingSenderId,
    appId: VITE_appId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;