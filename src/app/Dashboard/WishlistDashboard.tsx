import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Close from '@material-ui/icons/Close';
import * as actions from '../../store/actions/actions';
import { AppState } from '../../utils/interfaces';
import { getWishlistById } from '../../utils/httpRequests';

interface Wishlist {
    id: number;
    eventType: string;
    privacyType: string;
    title: string;
    wishListDate: string;
    wishlistDescription: string;
}

function WishlistDashboard() {
    const dispatch = useDispatch();

    const [wishlist, setWishlist] = useState<Wishlist>();

    const wishlistId = useSelector((state: AppState) => state.wishlistModalId);
    const token = useSelector((state: AppState) => state.token);

    useEffect(() => {
        getWishlistById(token, wishlistId)
            .then((res) => res.json())
            .then((res) => setWishlist(res));
    }, []);

    return (
        <div className="overlay wishlist-dashboard-container">
            <section className="wishlist-dashboard">
                <h1 className="wishlist-title">{wishlist?.title}</h1>
                <button className="primary-btn" onClick={() => dispatch(actions.toggleItemForm())}>
                    Add Item
                </button>
                <i
                    className="dashboard-delete-btn"
                    onClick={() => dispatch(actions.toggleWishlistModal())}
                >
                    <Close />
                </i>
            </section>
        </div>
    );
}

export default WishlistDashboard;
