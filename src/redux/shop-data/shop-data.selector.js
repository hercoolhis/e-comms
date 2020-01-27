import { createSelector } from "reselect";

const selectShopData = state => state.shop;

const mapUrlParamsToCollection = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const selectShopDataCollections = createSelector([selectShopData], shop => shop.collections);

export const selectCollection = collectionIdParam =>
 createSelector(
     [selectShopDataCollections],
     collections => collections.find(collection => collection.id === mapUrlParamsToCollection[collectionIdParam]) )
