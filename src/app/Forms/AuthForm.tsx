import { connect } from 'react-redux';
import React, { useState } from 'react';

import * as actions from '../../store/actions/actionTypes';

import Close from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    toggleRegisterForm: () => void;
}

interface State {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    showPassword: boolean;
}

function AuthForm({ toggleRegisterForm }: Props): JSX.Element {
    const [values, setValues] = useState<State>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, name: event.target.value });
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, email: event.target.value });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, password: event.target.value });
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, confirmPassword: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const useStyles = makeStyles({
        marginTop: {
            marginTop: 20,
        },
    });

    const classes = useStyles();

    return (
        <div className="form-overlay">
            <div className="form-container auth-form">
                <i className="form-delete-btn" onClick={toggleRegisterForm}>
                    <Close />
                </i>
                <form className="wishlist-form">
                    <h1 className="form-title">Register</h1>
                    <TextField
                        required
                        label="Full Name"
                        type="text"
                        value={values.name}
                        onChange={handleNameChange}
                        inputProps={{ maxLength: 20 }}
                        // InputLabelProps={{
                        // shrink: true,
                        // }}
                        // error={}
                        // helperText={}
                    />
                    <TextField
                        required
                        type="text"
                        label="Email"
                        className={classes.marginTop}
                        value={values.email}
                        onChange={handleEmailChange}
                    />

                    <FormControl required className={classes.marginTop}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handlePasswordChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl required className={classes.marginTop}>
                        <InputLabel htmlFor="standard-adornment-password">
                            Confirm Password
                        </InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>
                <button className="primary-btn form-btn">Register</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleRegisterForm: () => dispatch({ type: actions.SHOW_REGISTER_FORM }),
    };
};

export default connect(null, mapDispatchToProps)(AuthForm);
