import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAb-zXOqHw8crK9MzACuozfSgIk2qErwaw',
  authDomain: 'create-markham-website.firebaseapp.com',
  projectId: 'create-markham-website',
  storageBucket: 'create-markham-website.appspot.com',
  messagingSenderId: '953383687504',
  appId: '1:953383687504:web:1882ba4c56fa94fb624855',
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
