import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyCDj3icRhZnm8yGaV1LTtJjBVW9rXedlgE",
    authDomain: "crown-db-7e062.firebaseapp.com",
    databaseURL: "https://crown-db-7e062.firebaseio.com",
    projectId: "crown-db-7e062",
    storageBucket: "crown-db-7e062.appspot.com",
    messagingSenderId: "883688233622",
    appId: "1:883688233622:web:d8abba08f7e8ef2310c0b7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth,
        createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }) 
        } catch (error) {
            console.log("error creating profile", error.message);
        } 

    }

    return userRef;


}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey),
    batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();

        batch.set(newDocRef,obj);
    });

    return await batch.commit();   

}

export const convertCollectionsSnapshotToMap = (collections) => {  
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollections.reduce((accummulator, collection) => {
        accummulator[collection.title.toLowerCase()] = collection;
        return accummulator
    }, {});
} 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
