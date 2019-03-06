import {ADD_TO_CART} from "../instant";
import {combineReducers} from 'redux';
import _ from 'lodash';
const items = (state = [], {type, productId, qty = 1}) => {
    switch (type) {
        case ADD_TO_CART:
            const existItem = _.find(state, (item) => item.productId === productId);
            if (existItem !== undefined) {
                return [...state.filter(item => item.productId !== productId),
                   {...existItem, qty: existItem.qty + qty}
                ]
            } else {
                return [...state, {productId, qty}]
            }

        default:
            return state;
    }
};

export default combineReducers({
    items
})