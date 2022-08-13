import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCGtIuvAGwbLXvA-Hx_1m1rZlYcuBF0Dpk',
  authDomain: 'auth-redux-88246.firebaseapp.com',
  projectId: 'auth-redux-88246',
  storageBucket: 'auth-redux-88246.appspot.com',
  messagingSenderId: '595290453620',
  appId: '1:595290453620:web:88da64a2ccdcfe04a68321',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
