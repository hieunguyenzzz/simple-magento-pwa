import database from "./firebase/database";
import {ENTITY_PRODUCT, ITEM_PER_PAGE} from "./instant";
import _ from "lodash";

class firestore {
    constructor(entity) {
        this.page = 1;
        this.limit = ITEM_PER_PAGE;
    }

    get = async () => {
        try {
            return database.collection(ENTITY_PRODUCT).orderBy('id').limit(this.page * this.limit).get().then((querySnap) => {
                return _.slice(querySnap.docs, (this.page-1) * ITEM_PER_PAGE).map(item => item.data());
            })
        } catch (e) {
            return [];
        }
    }

    offset = (page, limit = ITEM_PER_PAGE) => {
        this.page = page;
        this.limit = limit;
    }
}

export class ProductAdapter {
    constructor() {
        this.adapter = new firestore();
    }

    offset = (page, limit = ITEM_PER_PAGE) => {
        this.adapter.offset(page, limit);
    }

    get = () => this.adapter.get()
}