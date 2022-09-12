import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyCAqH1tbVLNF35lJKOp3HPZNRW1Mm8qHjE',
    authDomain: 'panaderia-91849.firebaseapp.com',
    projectId: 'panaderia-91849',
    storageBucket: "panaderia-91849.appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);


export default firebaseApp;