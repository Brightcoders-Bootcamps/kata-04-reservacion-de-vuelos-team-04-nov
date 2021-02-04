import firebase from 'firebase/app';
import Config from 'react-native-config';
const API_KEY = Config.API_KEY_FIREBASE;
//const API_KEY = 'AIzaSyAMAvkvWB0VJ2Se2joiKGYc5NQRWCpKLo8';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "rsvf-68ea7.firebaseapp.com",
  projectId: "rsvf-68ea7",
  storageBucket: "rsvf-68ea7.appspot.com",
  messagingSenderId: "576128509340",
  appId: "1:576128509340:web:2ce0aaeda08d1d5bbbd459"
};

export default firebase.initializeApp(firebaseConfig);
