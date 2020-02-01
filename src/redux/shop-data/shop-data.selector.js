import { createSelector } from "reselect";

const selectShopData = state => state.shop;

export const selectShopDataCollections = createSelector([selectShopData], shop => shop.collections);

export const selectCollectionsForPreview = createSelector(
    [selectShopDataCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionIdParam =>
 createSelector(
     [selectShopDataCollections],
     collections => collections ? collections[collectionIdParam] : null
)
