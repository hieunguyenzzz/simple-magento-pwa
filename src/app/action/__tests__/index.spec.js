import * as actions from '../index';
import {SAVE_PRODUCT} from "../../instant";

describe('actions', () => {
    it('should create action to save product', () => {
        const products = [1, 2, 3];
        const expectedAction = {
            type: SAVE_PRODUCT,
            products
        }

        expect(actions.saveProduct(products)).toEqual(expectedAction);
    })
});