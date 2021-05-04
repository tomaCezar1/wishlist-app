import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';
import { connect } from 'react-redux';

function Form({ toggleForm }): JSX.Element {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('None');
    const [privacy, setPrivacy] = useState('Private');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handlePrivacyChange = (event) => {
        setPrivacy(event.target.value);
    };

    const types = ['None', 'Birthday', 'Wedding', 'Other'];
    const privacyTypes = ['Private', 'Not private'];

    const date = new Date();
    const todayDate = date.toISOString().split('T')[0];

    const useStyles = makeStyles({
        input: {
            marginTop: 20,
            borderRadius: 20,
        },
    });

    const classes = useStyles();

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
                        label="Title"
                        style={{ marginTop: 10 }}
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <TextField
                        select
                        required
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
                    />
                    <TextField
                        className={classes.input}
                        label="Date"
                        type="date"
                        defaultValue={todayDate}
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
                <button className="primary-btn form-btn">Create Wishlist</button>
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
