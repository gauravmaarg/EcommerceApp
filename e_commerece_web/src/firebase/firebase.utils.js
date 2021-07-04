import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDJe6Zk30zaYcOG5KWX3_XXkt-smg-2km8",
  databaseURL: 'https://crwn-db-22dff.firebaseio.com',
  authDomain: "crwn-db-22dff.firebaseapp.com",
  projectId: "crwn-db-22dff",
  storageBucket: "crwn-db-22dff.appspot.com",
  messagingSenderId: "45630606420",
  appId: "1:45630606420:web:d68a82c437cf8c621cb1c1",
  measurementId: "G-RC552WNG3Z"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;