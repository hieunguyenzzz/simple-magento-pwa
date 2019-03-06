import database from '../firebase/database'
import {ITEM_PER_PAGE, LOADING_BEGIN, LOADING_FINISH, SAVE_PRODUCT} from "../instant";
import _ from 'lodash';

export const fetchData = (entity, page) => dispatch => {
    dispatch(loadingBeginning());

        database.collection(entity).orderBy('id').limit(page * ITEM_PER_PAGE).get().then((querySnap) => {

            // array of documentSnapshot
            const docs = _.slice(querySnap.docs, (page-1) * ITEM_PER_PAGE);
            // convert documentSnapshot to normal data array for easier to write test
            dispatch(saveProduct(docs.map(item => item.data())));
            dispatch(loadingFinish());
        }
    )
}

export const saveProduct = (products) => ({
    type: SAVE_PRODUCT,
    products
})

export const loadingBeginning = () => ({
    type: LOADING_BEGIN
})

export const loadingFinish = () => ({
    type: LOADING_FINISH
})