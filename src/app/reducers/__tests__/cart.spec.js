import cart from '../cart'
import {ADD_TO_CART} from "../../instant";

describe('cart test', () => {
    it('add to cart', () => {
        const cartBefore = {};
        const cartAfter = {
            items: [
                {
                    productId: 1,
                    qty: 4
                }
            ]
        }

        expect(
            cart(cartBefore, {
                type: ADD_TO_CART,
                productId: 1,
                qty: 4
            })
        ).toEqual(cartAfter);
    })

    it('add the same product into cart will raise qty', () => {
        const cartBefore = {
            items: [
                {
                    productId: 1,
                    qty: 1
                }
            ]
        };

        const cartAfter = {
            items: [
                {
                    productId: 1,
                    qty: 2
                }
            ]
        }

        expect(
            cart(cartBefore, {
                type: ADD_TO_CART,
                productId: 1
            })
        ).toEqual(cartAfter);
    })
})