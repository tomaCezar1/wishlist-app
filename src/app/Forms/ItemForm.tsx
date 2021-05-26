import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/actions/actions';

import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

function ItemForm() {
    const dispatch = useDispatch();

    const [itemName, setItemName] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [price, setPrice] = useState<string>('0.00');
    const [currency, setCurrency] = useState<string>('MDL');
    const [description, setDescription] = useState<string>('');
    const [priority, setPriority] = useState<string>('Want to have');

    const currencyOptions = ['MDL', 'EUR', 'USD'];
    const priorityOptions = ['Want to have', 'Nice to have', 'Must have'];

    // Event Handlers
    const itemHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    };

    const linkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
    };

    const priceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const currencyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    const descriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const priorityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(event.target.value);
    };

    // Styles
    const useStyles = makeStyles({
        input: {
            marginTop: 24,
        },
    });

    const classes = useStyles();

    return (
        <div className="overlay">
            <div className="form-container item-form">
                <i className="form-delete-btn" onClick={() => dispatch(actions.toggleItemForm())}>
                    <Close />
                </i>
                <form className="wishlist-form">
                    <h1 className="form-title"> Create Item</h1>
                    <TextField
                        required
                        value={itemName}
                        label="Item Name"
                        id="item-name"
                        inputProps={{ maxLength: 25 }}
                        onChange={itemHandler}
                        // error={titleError}
                        // helperText={titleErrorDescription}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        value={link}
                        label="Link"
                        id="item-link"
                        inputProps={{ maxLength: 100 }}
                        onChange={linkHandler}
                        className={classes.input}
                        // error={titleError}
                        // helperText={titleErrorDescription}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        value={price}
                        label="Price"
                        id="item-price"
                        inputProps={{ maxLength: 10 }}
                        onChange={priceHandler}
                        className={classes.input}
                        // error={titleError}
                        // helperText={titleErrorDescription}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        select
                        label="Currency"
                        id="item-currency"
                        value={currency}
                        onChange={currencyHandler}
                        className={classes.input}
                        // error={typeError}
                        // helperText={typeErrorDescription}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    >
                        {currencyOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        multiline
                        label="Description"
                        id="item-description"
                        className={classes.input}
                        variant="outlined"
                        rows={4}
                        inputProps={{ maxLength: 400 }}
                        value={description}
                        onChange={descriptionHandler}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        select
                        label="Priority"
                        id="item-priority"
                        value={priority}
                        onChange={priorityHandler}
                        className={classes.input}
                        // error={typeError}
                        // helperText={typeErrorDescription}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    >
                        {priorityOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                <button className="primary-btn form-btn item-form-btn" id="item-form-btn">
                    Add item
                </button>
            </div>
        </div>
    );
}

export default ItemForm;
