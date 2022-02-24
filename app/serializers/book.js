
import RESTSerializer from '@ember-data/serializer/rest';

export default class BookSerializer extends RESTSerializer {

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { book: (payload.data[0].attributes.data) };
        return super.normalizeResponse(
            store,
            primaryModelClass,
            payload,
            id,
            requestType
        );
    }
}
