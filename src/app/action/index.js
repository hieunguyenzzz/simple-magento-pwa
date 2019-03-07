import {LOADING_BEGIN, LOADING_FINISH, SAVE_PRODUCT} from "../instant";
import {ProductAdapter} from '../ProductAdapter';

export const fetchProduct = (page) => dispatch => {
    dispatch(loadingBeginning());
    const adapter = new ProductAdapter();
    adapter.get(page).then((products) => {
        dispatch(saveProduct(products));
        dispatch(loadingFinish());
    })
};

export const saveProduct = (products) => ({
    type: SAVE_PRODUCT,
    products
});

export const loadingBeginning = () => ({
    type: LOADING_BEGIN
});

export const loadingFinish = () => ({
    type: LOADING_FINISH
});