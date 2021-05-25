import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Close from '@material-ui/icons/Close';
import * as actions from '../../store/actions/actions';
import { AppState } from '../../utils/interfaces';
import { getWishlistById } from '../../utils/httpRequests';

interface Props {
    token: string;
    wishlistId: number;
    toggleWishlistModal: () => void;
}

interface Wishlist {
    id: number;
    eventType: string;
    privacyType: string;
    title: string;
    wishListDate: string;
    wishlistDescription: string;
}

function WishlistDashboard({ token, wishlistId, toggleWishlistModal }: Props) {
    const [wishlist, setWishlist] = useState<Wishlist>();

    useEffect(() => {
        getWishlistById(token, wishlistId)
            .then((res) => res.json())
            .then((res) => setWishlist(res));
    }, []);

    return (
        <div className="overlay wishlist-dashboard-container">
            <section className="wishlist-dashboard">
                <h1 className="wishlist-title">{wishlist?.title}</h1>
                <button className="primary-btn">Add Items</button>
                <i className="dashboard-delete-btn" onClick={toggleWishlistModal}>
                    <Close />
                </i>
            </section>
        </div>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        wishlistId: state.wishlistModalId,
        token: state.token,
    };
};

const mapDisptachToProps = (dispatch) => {
    return {
        toggleWishlistModal: () => dispatch(actions.toggleWishlistModal()),
    };
};

export default connect(mapStateToProps, mapDisptachToProps)(WishlistDashboard);
