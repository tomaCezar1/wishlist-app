import { connect } from 'react-redux';

import Close from '@material-ui/icons/Close';
import * as actions from '../../store/actions/actions';
import { AppState } from '../../utils/interfaces';

interface Props {
    wishlistId: number;
    toggleWishlistModal: () => void;
    wishlists: { id: number; title: string; wishListDate: string }[];
}

function WishlistDashboard({ wishlistId, wishlists, toggleWishlistModal }: Props) {
    const wishlist = wishlists.filter((wishlist) => wishlist.id === wishlistId)[0];

    return (
        <div className="overlay wishlist-dashboard-container">
            <section className="wishlist-dashboard">
                <h1 className="wishlist-title">{wishlist.title}</h1>
                {/* <h1>{wishlist.wishListDate}</h1> */}
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
        wishlists: state.allWishlists,
    };
};

const mapDisptachToProps = (dispatch) => {
    return {
        toggleWishlistModal: () => dispatch(actions.toggleWishlistModal()),
    };
};

export default connect(mapStateToProps, mapDisptachToProps)(WishlistDashboard);
