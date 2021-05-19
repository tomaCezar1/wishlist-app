import React, { useState } from 'react';
import { connect } from 'react-redux';

import Time from '@material-ui/icons/AccessTime';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
    id: number;
    date: string;
    title: string;
    handleDeleteRequest: (id: number) => void;
}

function Wishlistcard(props: Props): JSX.Element {
    const { id, title, date, handleDeleteRequest } = props;

    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
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
            <i className="card-delete-btn" onClick={toggleDialog}>
                <Close />
            </i>
            <Dialog
                open={open}
                onClose={toggleDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Are you sure you want to log out??</DialogTitle>
                <DialogActions>
                    <Button
                        onClick={toggleDialog}
                        id="cancel-btn"
                        className="dialog-btn"
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => handleDeleteRequest(id)}
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleDeleteRequest: (id: number) => dispatch({ type: 'DELETE_WISHLIST', id: id }),
    };
};

export default connect(null, mapDispatchToProps)(Wishlistcard);
