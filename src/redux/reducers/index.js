import { combineReducers } from "@reduxjs/toolkit";

import { productReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductsReducer
})

export default reducers