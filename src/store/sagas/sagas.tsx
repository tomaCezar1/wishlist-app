import { put, takeLatest, all, select } from 'redux-saga/effects';

import { createWishlist, deleteWishlist, getWishlists } from '../../utils/httpRequests';
import * as actions from '../actions/actionTypes';

const getToken = (state) => state.token;

function* getWishlistsSaga() {
    const token = yield select(getToken);
    const wishlists = yield getWishlists(token).then((res) =>
        res.json().catch((e) => {
            throw new Error(e);
        })
    );
    yield put({ type: actions.UPDATE_WISHLISTS, wishlists: wishlists });
}

function* deleteWishlistSaga(action) {
    yield deleteWishlist(action.id).catch((e) => {
        throw new Error(e);
    });
    yield getWishlistsSaga();
}

function* createWishlistSaga(action) {
    const token = yield select(getToken);
    yield createWishlist(action.wishlists, token);
    yield getWishlistsSaga();
}

function* watchSagas() {
    yield all([
        takeLatest(actions.DELETE_WISHLIST, deleteWishlistSaga),
        takeLatest(actions.CREATE_WISHLIST, createWishlistSaga),
    ]);
}

export default watchSagas;
