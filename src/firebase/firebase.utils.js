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
    // console.log("userauth",userAuth);
    if(!userAuth) return null;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log("userRef",userRef);
    const snapShot = await userRef.get();
    // console.log("snapShot",snapShot);

    if(!snapShot.exists){
        const {displayName,email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
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
   
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;