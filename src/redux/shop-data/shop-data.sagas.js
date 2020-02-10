import { takeEvery, call, put} from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop-data.types";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop-data.action";


export function* fetchCollectionsAsync() {
    try {       
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();

        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}
