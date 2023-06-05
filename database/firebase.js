// database/firebaseDb.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


 const firebaseConfig = {
    apiKey: "AIzaSyDk5jskVatUrglUsr07tU2Tv1X3vVIYMZs",
    authDomain: "fypdb-2303f.com.fypversion3",
    databaseURL: "https://fypdb-2303f-default-rtdb.firebaseio.com",
    projectId: "fypdb-2303f",
    storageBucket: "fypdb-2303f.appspot.com",
    appId: "1:46658341518:android:60cdc9cb64aec7024257df"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
 export default firebase;
