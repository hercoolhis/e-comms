import ShopActionTypes from "./shop-data.types";

export const updateCollections = (collections) => {
    console.log(collections);
    return {
        type: ShopActionTypes.UPDATE_COLLECTION,
        payload: collections
    }
}

