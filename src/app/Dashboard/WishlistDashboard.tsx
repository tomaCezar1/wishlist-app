import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Close from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { AppState, WishlistItems } from '../../utils/interfaces';
import { getWishlistById, deleteItem } from '../../utils/httpRequests';
import * as actions from '../../store/actions/actions';
import ItemForm from '../Forms/ItemForm';

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

    const wishlistId = useSelector((state: AppState) => state.wishlistModalId);
    const token = useSelector((state: AppState) => state.token);
    const showItemForm = useSelector((state: AppState) => state.showItemForm);

    const [wishlist, setWishlist] = useState<Wishlist>();
    const [wishlistItems, setWishlistItems] = useState<WishlistItems[]>([]);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [link, setLink] = useState<string | null>(null);
    const [dialog, setDialog] = useState<boolean>(false);
    const [itemId, setItemId] = useState<number | null>(null);

    const toggleDialog = (id: number = null) => {
        setItemId(id);
        setDialog(!dialog);
    };

    const deleteRequest = () => {
        deleteItem(token, wishlistId, itemId);
        const remainingWishlists = wishlistItems.filter((item) => item.id !== itemId);
        setWishlistItems(remainingWishlists);
        setDialog(false);
        setItemId(null);
    };

    const updateItems = () => {
        getWishlistById(token, wishlistId)
            .then((res) => res.json())
            .then((res) => {
                setWishlist(res);
                setWishlistItems(res.items);
            });
    };

    useEffect(() => {
        updateItems();
    }, []);

    // Popover logic
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, link: string) => {
        setAnchorEl(event.currentTarget);
        setLink(link);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <div className="overlay wishlist-dashboard-container">
                <section className="wishlist-dashboard">
                    <i
                        className="dashboard-delete-btn"
                        onClick={() => dispatch(actions.toggleWishlistModal())}
                        id="close-item-btn"
                    >
                        <Close />
                    </i>
                    <h1 className="wishlist-title">{wishlist?.title}</h1>
                    <table className="items-table">
                        <tbody>
                            {wishlistItems.map((item) => {
                                return (
                                    <tr className="item-row" key={item.id}>
                                        <td className="item-name">
                                            <h1>{item.itemName}</h1>
                                        </td>
                                        <td>
                                            <h2>
                                                {item.price} {item.currency}
                                            </h2>
                                        </td>
                                        <td>
                                            {item.itemLink ? (
                                                <button
                                                    className="card-btn grey-btn"
                                                    id="view-link-btn"
                                                    onClick={(e) => handleClick(e, item.itemLink)}
                                                >
                                                    View
                                                </button>
                                            ) : null}
                                            {item.itemLink ? (
                                                <Popover
                                                    id="item-link-popover"
                                                    open={open}
                                                    anchorEl={anchorEl}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    }}
                                                >
                                                    <p className="popover-text">{link}</p>
                                                </Popover>
                                            ) : null}
                                        </td>
                                        <td>
                                            <button
                                                className="card-btn grey-btn"
                                                id="item-edit-btn"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="card-btn red-btn"
                                                id="delete-item-btn"
                                                onClick={() => toggleDialog(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <button
                        id="add-item-btn"
                        className="primary-btn"
                        onClick={() => dispatch(actions.toggleItemForm())}
                    >
                        Add Item
                    </button>
                </section>
            </div>
            {showItemForm ? <ItemForm updateItems={updateItems} /> : null}
            <Dialog
                open={dialog}
                onClose={() => toggleDialog()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                id="item-dialog"
            >
                <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
                <DialogActions>
                    <Button
                        id="cancel-btn-item"
                        className="dialog-btn"
                        onClick={() => toggleDialog()}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={deleteRequest}
                        id="confirm-btn-item"
                        className="dialog-btn"
                        color="primary"
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default WishlistDashboard;
