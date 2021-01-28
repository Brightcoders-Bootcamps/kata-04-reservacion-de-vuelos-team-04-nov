import firebase from 'firebase/app';
import Config from 'react-native-config';
const API_KEY = Config.API_KEY_FIREBASE;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "rsvflights-258f4.firebaseapp.com",
  projectId: "rsvflights-258f4",
  storageBucket: "rsvflights-258f4.appspot.com",
  messagingSenderId: "403483415659",
  appId: "1:403483415659:web:9f363806fbb1ab66460d2e",
  measurementId: "G-4R60HVC439"
};

export default firebase.initializeApp(firebaseConfig);
