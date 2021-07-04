import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionURLParam => createSelector(
[selectCollections],
collections => 
 collections[collectionURLParam]
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key =>collections[key])
);