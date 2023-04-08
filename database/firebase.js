// database/firebaseDb.js
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDk5jskVatUrglUsr07tU2Tv1X3vVIYMZs",
    authDomain: "reactnativefirebase-00000.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
    projectId: "reactnativefirebase-00000",
    storageBucket: "reactnativefirebase-00000.appspot.com",
    messagingSenderId: "000000000000000",
    appId: "1:46658341518:android:60cdc9cb64aec7024257df"
};
firebase.initializeApp(firebaseConfig);
export default firebase;