import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSeRGfPAJ74GFC7QCD_mSrlwQi3q4nHt8",
    authDomain: "crwn-db-ab224.firebaseapp.com",
    projectId: "crwn-db-ab224",
    storageBucket: "crwn-db-ab224.appspot.com",
    messagingSenderId: "770268317359",
    appId: "1:770268317359:web:232fa83f76be60aa03765a"
  };

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return null;
    
    //firestore.doc it takes a collection path and id coloumn
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    //get method is used to retrive data of uid
    const snapShot = await userRef.get();
    // console.log("SNAPSHOT", snapShot)
    if(!snapShot.exists){
        const {displayName,email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({   //set method is used for signup with user
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('error created user',err.message);
        }
    }
    return userRef;
   
};

export const addCollectionAddDocuments = async(collectionKey,objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.title);
        batch.set(newDocRef,obj);
    });

   return await batch.commit()
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;