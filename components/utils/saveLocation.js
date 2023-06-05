import Geolocation from 'react-native-geolocation-service';
import firebase from '../../database/firebase';
import { Bus } from '../data/busDetails';

const db = firebase.firestore();
const collectionRef = db.collection('location');

 //  updateCUrrent and updateLOocationInFirbase  mmove to dirver app 
export const updateCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
          //    console.log('Latitude:', latitude);
          //  console.log('Longitude:', longitude);
            updateLocationInFirebase(latitude, longitude)

          //  setTimeout(() => {
          //   console.log({latitude}, {longitude})
          //  }, 1000);

           setTimeout(updateCurrentLocation, 20000);
      },
      error => {
        console.log('Error getting location:', error);
        setTimeout(updateCurrentLocation, 20000);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
  };

 const updateLocationInFirebase = async(latitude, longitude) => {
  
  try {

    // Check if the document exists before updating
    const documentId ='GSbt9qBJwZrP46b3FYYT';
    const documentSnapshot = await collectionRef.doc(documentId).get();
    if (documentSnapshot.exists) {
      await collectionRef.doc(documentId).update({
        lat: latitude,
        lng: longitude,
      });
      console.log('Document updated successfully!');
    } else {
      console.log('Document does not exist.');
    }
  } catch (error) {
    console.error('Error updating document:', error);
  }
  };

  // setup the gloabl store and update the bus latitute
  export const getBusLocations =()=>{
    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      const updatedData = snapshot.docs.map(doc => ({
        bus: Bus[doc.id] ?? doc.id,
        location:doc.data(),
      }));
       console.log('updatedData',updatedData)
    });

    return unsubscribe;
  }

