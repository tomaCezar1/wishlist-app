import React, { useState } from 'react';
import Router from 'next/router';

import { url } from '../../utils/httpRequests';

import Time from '@material-ui/icons/AccessTime';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

function Wishlistcard({ title, id, date }): JSX.Element {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteRequest = () => {
        fetch(`${url}/wishlists/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => {
                setOpen(false);
                Router.reload();
            })

            .catch((e) => {
                throw new Error(e);
            });
    };

    return (
        <div className="card">
            <div className="card-top">
                <h1>{title}</h1>
                <div className="card-time">
                    <Time />
                    <h2>{date}</h2>
                </div>
            </div>
            <div className="button-container">
                <button className="card-btn primary-btn">Add</button>
                <button className="card-btn grey-btn">Edit</button>
            </div>
            <i className="card-delete-btn" onClick={handleClickOpen}>
                <Close />
            </i>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Are you sure you want to delete this wishlist?</DialogTitle>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        id="cancel-btn"
                        className="dialog-btn"
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDeleteRequest}
                        id="continue-btn"
                        className="dialog-btn"
                        color="primary"
                    >
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default Wishlistcard;
