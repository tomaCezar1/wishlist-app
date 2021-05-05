import { useState } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';

import { postRequest } from '../../utils/httpRequests';

function Form({ toggleForm }): JSX.Element {
    const todayDate = new Date();
    const formattedDate = todayDate.toISOString().split('T')[0];

    // State
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [type, setType] = useState('None');
    const [typeError, setTypeError] = useState(false);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(formattedDate);
    const [privacy, setPrivacy] = useState('Private');

    // Event Handlers
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handlePrivacyChange = (event) => {
        setPrivacy(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const types = ['None', 'Birthday', 'Wedding', 'Other'];
    const privacyTypes = ['Private', 'Not private'];

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
        if (type === 'None' || !type) {
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
        const postData = {
            title,
            type,
            description,
            wishlistDate: date,
            privacy_type: privacy,
        };

        postRequest(postData).catch((e) => {
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
                        onChange={handleTitleChange}
                    />
                    <TextField
                        select
                        required
                        error={typeError}
                        value={type}
                        className={classes.input}
                        onChange={handleTypeChange}
                        helperText="Please select wishlist type"
                    >
                        {types.map((option) => (
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
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <TextField
                        className={classes.input}
                        label="Date"
                        type="date"
                        onChange={handleDateChange}
                        value={date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        select
                        className={classes.input}
                        value={privacy}
                        onChange={handlePrivacyChange}
                        helperText="Please select privacy type"
                    >
                        {privacyTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                <button className="primary-btn form-btn" onClick={formVerification}>
                    Create Wishlist
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
