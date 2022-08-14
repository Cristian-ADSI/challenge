import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword as sigIn,
  setPersistence as persistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCGtIuvAGwbLXvA-Hx_1m1rZlYcuBF0Dpk',
  authDomain: 'auth-redux-88246.firebaseapp.com',
  projectId: 'auth-redux-88246',
  storageBucket: 'auth-redux-88246.appspot.com',
  messagingSenderId: '595290453620',
  appId: '1:595290453620:web:88da64a2ccdcfe04a68321',
};

const firebaseApp = initializeApp(firebaseConfig);
const dataBase = getFirestore(firebaseApp);
const auth = getAuth();
export { auth,dataBase, sigIn, persistence };
