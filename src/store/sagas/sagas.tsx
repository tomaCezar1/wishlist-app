import { put, takeLatest, all } from 'redux-saga/effects';

import { createWishlist, deleteWishlist, getWishlists } from '../../utils/httpRequests';
import * as actions from '../actions/actionTypes';

function* getWishlistsSaga() {
    const wishlists = yield getWishlists().then((res) =>
        res.json().catch((e) => {
            throw new Error(e);
        })
    );
    yield put({ type: actions.FETCH_WISHLISTS, wishlists: wishlists });
}

function* deleteWishlistSaga(action) {
    yield deleteWishlist(action.id).catch((e) => {
        throw new Error(e);
    });
    yield getWishlistsSaga();
}

function* createWishlistSaga(action) {
    yield createWishlist(action.wishlists);
    yield getWishlistsSaga();
}

function* watchSagas() {
    yield all([
        takeLatest(actions.DELETE_WISHLIST, deleteWishlistSaga),
        takeLatest(actions.CREATE_WISHLIST, createWishlistSaga),
    ]);
}

export default watchSagas;
