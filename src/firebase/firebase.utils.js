import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAxQKxuEyz3bYhaG_abbRqYch0H6gcPGEo",
  authDomain: "geomaticapp-c9e26.firebaseapp.com",
  databaseURL: "https://geomaticapp-c9e26.firebaseio.com",
  projectId: "geomaticapp-c9e26",
  storageBucket: "geomaticapp-c9e26.appspot.com",
  messagingSenderId: "896876577759",
  appId: "1:896876577759:web:16543329e84ed43e11ba6a",
  measurementId: "G-WHBMEYT36B"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}/`);
  const snapShot = await userRef.get();

  if (snapShot.exists) {
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
      console.error(error.message);
    }
  }
  return userRef;
};

export const getUserProjectRef = async userId => {
  const projectsRef = firestore
    .collection("projects")
    .where("userId", "==", userId);
  const snapShot = await projectsRef.get();

  if (snapShot.empty) {
    const projectsDocRef = firestore.collection("projects").doc();
    await projectsDocRef.set({ userId, projects: [] });
    return projectsDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
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

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
