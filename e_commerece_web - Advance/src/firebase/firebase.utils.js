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
  
  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };

export const convertCollectonsSnapShotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items}= doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()]= collection;
      return accumulator;
    }, {});
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentuser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;