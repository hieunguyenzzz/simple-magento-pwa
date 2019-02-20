import {combineReducers} from "redux";
import * as productReducer from "./product";
import {ACTIVE} from "../instant";
import {isloading} from "./isloading";

export const getFilteredProduct = (state, filter = ACTIVE) => {
    return productReducer.getFilteredProduct(state.product, filter);
}

const RootReducer = combineReducers({
    product: productReducer.product,
    isloading
})

export default RootReducer;