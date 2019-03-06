import * as cartAction from '../cart';
import {ADD_TO_CART} from "../../instant";

describe('actions', () => {
    it('should create action to add to cart with default qty', () => {
        const productId = 1;
        const expectedAction = {
            type: ADD_TO_CART,
            productId: productId,
            qty: 1
        }

        expect(cartAction.addToCart({productId})).toEqual(expectedAction);
    })

    it('should create action to add to cart with custom qty', () => {
        const productId = 1;
        const expectedAction = {
            type: ADD_TO_CART,
            productId: productId,
            qty: 2
        }

        expect(cartAction.addToCart({productId, qty: 2})).toEqual(expectedAction);
    })
})