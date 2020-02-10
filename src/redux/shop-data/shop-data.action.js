import ShopActionTypes from "./shop-data.types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_START
    }
}

export const fetchCollectionSuccess = (collectionsMap) => {    
    return {
        type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: collectionsMap
    }
}

export const fetchCollectionFailure = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {

        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        console.log("starting collection fetch");
        
        collectionRef.get()
        .then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);            
            dispatch(fetchCollectionSuccess(collectionsMap));
        })
        .catch(error => {
            dispatch(fetchCollectionFailure(error.message));
        })

    }
}

