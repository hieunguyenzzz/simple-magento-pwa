import {combineReducers} from "redux";
import * as productReducer from "./product";
import cart from './cart';
import {ACTIVE} from "../instant";
import {isloading} from "./isloading";

export const getFilteredProduct = (state, filter = ACTIVE) => {
    return productReducer.getFilteredProduct(state.product, filter);
}

const RootReducer = combineReducers({
    product: productReducer.product,
    cart,
    isloading
})

export default RootReducer;