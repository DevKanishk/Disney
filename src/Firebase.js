import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAF8BWTjQaDEdLwEJ6LqEw4b279dOHI6Qw",
    authDomain: "ancient-folio-268007.firebaseapp.com",
    databaseURL: "https://ancient-folio-268007.firebaseio.com",
    projectId: "ancient-folio-268007",
    storageBucket: "ancient-folio-268007.appspot.com",
    messagingSenderId: "914723289628",
    appId: "1:914723289628:web:7f15cdd19ca3ab3b0a3dd9",
    measurementId: "G-6BH8V2ZLTK"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;