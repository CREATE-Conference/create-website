import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  apiKey: 'AIzaSyAb-zXOqHw8crK9MzACuozfSgIk2qErwaw',
  authDomain: 'create-markham-website.firebaseapp.com',
  projectId: 'create-markham-website',
  storageBucket: 'create-markham-website.appspot.com',
  messagingSenderId: '953383687504',
  appId: '1:953383687504:web:1882ba4c56fa94fb624855',
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
