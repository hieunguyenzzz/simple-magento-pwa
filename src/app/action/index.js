import database from '../firebase/database'
import {ITEM_PER_PAGE, LOADING_BEGIN, LOADING_FINISH, SAVE_PRODUCT} from "../instant";

export const fetchData = (entity, page) => dispatch => {
    dispatch(loadingBeginning());
    database.collection(entity).orderBy('id').limit(ITEM_PER_PAGE).get().then(
        (querySnap) => {
            dispatch(saveProduct(querySnap))
            dispatch(loadingFinish());
        }
    )
}

export const saveProduct = (querySnap) => ({
    type: SAVE_PRODUCT,
    products: querySnap
})

export const loadingBeginning = () => ({
    type: LOADING_BEGIN
})

export const loadingFinish = () => ({
    type: LOADING_FINISH
})