import { useState } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';

import { createWishlist } from '../../utils/httpRequests';

function Form({ toggleForm }): JSX.Element {
    const todayDate = new Date();
    const formattedDate = todayDate.toISOString().split('T')[0];

    // State
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [eventType, setEventType] = useState('None');
    const [typeError, setTypeError] = useState(false);
    const [description, setDescription] = useState('');
    const [wishlistDate, setWishlistDate] = useState(formattedDate);
    const [privacyType, setPrivacyType] = useState('Private');

    // Event Handlers
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTypeChange = (event) => {
        setEventType(event.target.value);
    };

    const handlePrivacyChange = (event) => {
        setPrivacyType(event.target.value);
    };

    const handleDateChange = (event) => {
        setWishlistDate(event.target.value);
    };

    const handleDescriptionChange = (event) => {
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

    const formVerification = () => {
        // Verify if title is completed
        if (!title) {
            setTitleError(true);
            return;
        } else {
            setTitleError(false);
        }

        // Verify wishlist type
        if (eventType === 'None' || !eventType) {
            setTypeError(true);
            return;
        } else {
            setTypeError(false);
        }

        formRequest();
        toggleForm();
        Router.reload();
    };

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

        createWishlist(postData).catch((e) => {
            throw new Error(e);
        });
    };

    return (
        <div className="form-overlay">
            <div className="form-container">
                <i className="form-delete-btn" onClick={toggleForm}>
                    <Close />
                </i>
                <form action="" className="wishlist-form">
                    <h1 className="form-title">Create wishlist</h1>
                    <TextField
                        required
                        error={titleError}
                        label="Title"
                        style={{ marginTop: 10 }}
                        value={title}
                        inputProps={{ maxLength: 25 }}
                        onChange={handleTitleChange}
                    />
                    <TextField
                        select
                        required
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
                        className={classes.input}
                        value={privacyType}
                        onChange={handlePrivacyChange}
                        helperText="Please select privacy type"
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
        toggleForm: () => dispatch({ type: 'SHOW_FORM' }),
    };
};

export default connect(null, mapDispatchToProps)(Form);
