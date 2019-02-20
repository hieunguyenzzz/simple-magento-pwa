import {ACTIVE, FETCH_PRODUCT, SAVE_PRODUCT} from "../instant";
import {combineReducers} from "redux";

const byId = (state = {}, action) => {
    switch (action.type) {
        case SAVE_PRODUCT:
            const nextState = {...state};
            action.products.forEach(item => {
                nextState[item.id] = item.data()
            });

            return nextState;
        default:
            return state
    }
}

const allId = (state = [], action) => {
    debugger;
    switch (action.type) {
        case SAVE_PRODUCT:
            let nextState = [...state];
            action.products.forEach(item => {
                nextState = [...nextState.filter(productId => productId !== item.id), item.id];
            });

            return nextState;
        default:
            return state
    }
}

const lastProduct = (state = null, action) => {
    switch (action.type) {
        case SAVE_PRODUCT:
            return action.products[action.response.length - 1];
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
    //lastProduct // for pagination
})

