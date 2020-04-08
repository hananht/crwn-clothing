import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbSF1kJEb05JHV8hFWGd8xSMuMOfbgc4g",
    authDomain: "crwn-db-564cc.firebaseapp.com",
    databaseURL: "https://crwn-db-564cc.firebaseio.com",
    projectId: "crwn-db-564cc",
    storageBucket: "crwn-db-564cc.appspot.com",
    messagingSenderId: "26962822902",
    appId: "1:26962822902:web:74420ff5cb9d946b8a8ed7",
    measurementId: "G-R85P4CX4D3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL, phoneNumber } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                phoneNumber,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => {
    return auth.signInWithPopup(provider);
}

export default firebase;