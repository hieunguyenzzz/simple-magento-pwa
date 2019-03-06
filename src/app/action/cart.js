import {ADD_TO_CART} from "../instant";

export const addToCart = ({productId, qty = 1, customPrice}) => ({
    type: ADD_TO_CART,
    productId,
    qty
})