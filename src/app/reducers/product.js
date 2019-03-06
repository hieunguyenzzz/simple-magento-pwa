import {ACTIVE, SAVE_PRODUCT} from "../instant";
import {combineReducers} from "redux";

export const byId = (state = {}, action) => {
    switch (action.type) {
        case SAVE_PRODUCT:
            const nextState = {};
            action.products.forEach(item => {
                nextState[item.id] = item
            });

            return nextState;
        default:
            return state
    }
}

export const allId = (state = [], action) => {
    switch (action.type) {
        case SAVE_PRODUCT:
            let nextState = [];
            action.products.forEach(item => {
                nextState = [...nextState.filter(productId => productId !== item.id), item.id];
            });

            return nextState;
        default:
            return state
    }
}


// @todo: apply filter
export const getFilteredProduct = (product, filter = ACTIVE) => {
    return product.allId.map(productId => product.byId[productId]);
}

export const getTotalPage = (product) => {

}

export const product = combineReducers({
    byId,
    allId,
})

