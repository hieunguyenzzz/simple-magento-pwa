import {SAVE_PRODUCT} from "../../instant";
import * as productReducer from '../product';

describe('product reducer', () => {
    it('should return initial state', () => {
        const initialState = {};
        expect(productReducer.byId({}, {})).toEqual(initialState);
    })

    it('should handle SAVE_PRODUCT with empty initialState', () => {
        const products = [
            {
                id: 1,
                name: "first product"
            },
            {
                id: 2,
                name: "2nd product"
            },
        ];
        const byIdStateBefore = {};
        const byIdStateAfter = {
            1: {
                id: 1,
                name: "first product"
            },
            2: {
                id: 2,
                name: "2nd product"
            }
        };

        expect(
            productReducer.byId(byIdStateBefore, {
                type: SAVE_PRODUCT,
                products
            })
        ).toEqual(byIdStateAfter)
    });
})