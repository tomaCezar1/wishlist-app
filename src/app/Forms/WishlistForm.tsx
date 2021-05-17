import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';

import { useFirstRender } from '../../utils/utils';
import * as actions from '../../store/actions/actionTypes';

function WishlistForm({ toggleForm, createWishlist }): JSX.Element {
    const todayDate: Date = new Date();
    const formattedDate: string = todayDate.toISOString().split('T')[0];

    // State
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [titleErrorDescription, setTitleErrorDescription] = useState(
        'Please enter your wishlist title'
    );
    const [eventType, setEventType] = useState('None');
    const [typeError, setTypeError] = useState(false);
    const [description, setDescription] = useState('');
    const [wishlistDate, setWishlistDate] = useState(formattedDate);
    const [privacyType, setPrivacyType] = useState('Private');

    // Event Handlers
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEventType(event.target.value);
    };

    const handlePrivacyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrivacyType(event.target.value);
    };

    const handleDateChange = (event) => {
        setWishlistDate(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const wishlistOptions = ['None', 'Birthday', 'Wedding', 'Other'];
    const privacyOptions = ['Private', 'Public'];

    const useStyles = makeStyles({
        input: {
            marginTop: 20,
            borderRadius: 20,
        },
    });

    const classes = useStyles();

    // Form Verification
    const formVerification = () => {
        const titleValid = /^[\sA-Za-z]*$/.test(title) && title?.trim();
        const eventTypeValid = eventType !== 'None';

        if (!/^[\sA-Za-z]*$/.test(title)) {
            setTitleErrorDescription('Symbols, whitespaces and numbers are not valid');
        }

        if (!title?.trim()) {
            setTitleErrorDescription('Please enter your wishlist title');
        }

        setTitleError(!titleValid);
        setTypeError(!eventTypeValid);

        if (titleValid && eventTypeValid) {
            formRequest();
            toggleForm();
        }
    };

    // Form Request
    const formRequest = () => {
        const privacyTypeUppercase = privacyType.toUpperCase();
        const eventTypeUppercase = eventType.toUpperCase();
        const formattedDateforRequest = wishlistDate.concat('T00:00:00');

        const postData = {
            title,
            eventType: eventTypeUppercase,
            description,
            wishListDate: formattedDateforRequest,
            privacyType: privacyTypeUppercase,
        };

        createWishlist(postData);
    };

    return (
        <div className="form-overlay">
            <div className="form-container">
                <i className="form-delete-btn" onClick={toggleForm}>
                    <Close />
                </i>
                <form className="wishlist-form">
                    <h1 className="form-title">Create Wishlist</h1>
                    <TextField
                        required
                        error={titleError}
                        label="Wishlist Title"
                        value={title}
                        inputProps={{ maxLength: 25 }}
                        onChange={handleTitleChange}
                        helperText={titleErrorDescription}
                    />
                    <TextField
                        select
                        required
                        label="Wishlist Type"
                        error={typeError}
                        value={eventType}
                        className={classes.input}
                        onChange={handleTypeChange}
                        helperText="Please select wishlist type"
                    >
                        {wishlistOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        multiline
                        className={classes.input}
                        label="Description"
                        variant="filled"
                        rows={4}
                        inputProps={{ maxLength: 1000 }}
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <TextField
                        className={classes.input}
                        label="Date"
                        type="date"
                        onChange={handleDateChange}
                        value={wishlistDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        select
                        required
                        label="Privacy Type"
                        className={classes.input}
                        value={privacyType}
                        onChange={handlePrivacyChange}
                    >
                        {privacyOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                <button className="primary-btn form-btn" onClick={formVerification}>
                    Add Wishlist
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: () => dispatch({ type: actions.SHOW_FORM }),
        createWishlist: (data) => dispatch({ type: actions.CREATE_WISHLIST, wishlists: data }),
    };
};

export default connect(null, mapDispatchToProps)(WishlistForm);
