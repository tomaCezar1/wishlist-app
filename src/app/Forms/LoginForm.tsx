import { connect } from 'react-redux';
import React, { useState } from 'react';

import * as actions from '../../store/actions/actions';
import { LoginCredentials } from '../../utils/interfaces';
import { loginUser } from '../../utils/httpRequests';

import Close from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    toggleLoginForm: () => void;
}

interface LoginState {
    email: string;
    password: string;
    confirmPassword: string;
    showPassword: boolean;
}

interface Errors {
    error: boolean;
    description: string;
}

function LoginForm({ toggleLoginForm }: Props): JSX.Element {
    // State
    const [values, setValues] = useState<LoginState>({
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    });

    const [emailErrors, setEmailErrors] = useState<Errors>({
        error: false,
        description: ' ',
    });

    const [passwordErrors, setPasswordErrors] = useState<Errors>({
        error: false,
        description: ' ',
    });

    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState<Errors>({
        error: false,
        description: ' ',
    });

    // Handlers
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

    // Form verification
    const formVerification = () => {};

    // Styles
    const useStyles = makeStyles({
        marginTop: {
            marginTop: 14,
        },
    });

    const classes = useStyles();

    return (
        <div className="form-overlay">
            <div className="form-container login-form">
                <i className="form-delete-btn" onClick={toggleLoginForm}>
                    <Close />
                </i>
                <form className="wishlist-form">
                    <h1 className="form-title">Login</h1>
                    <TextField
                        required
                        type="text"
                        label="Email"
                        className={classes.marginTop}
                        inputProps={{ maxLength: 40 }}
                        value={values.email}
                        onChange={handleEmailChange}
                        error={emailErrors.error}
                        helperText={emailErrors.description}
                    />

                    <FormControl required className={classes.marginTop}>
                        <InputLabel
                            error={passwordErrors.error}
                            htmlFor="standard-adornment-password"
                        >
                            Password
                        </InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            error={passwordErrors.error}
                            onChange={handlePasswordChange}
                            inputProps={{ maxLength: 25 }}
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
                        <FormHelperText
                            error={passwordErrors.error}
                            // eslint-disable-next-line react/no-children-prop
                            children={passwordErrors.description}
                        />
                    </FormControl>

                    <FormControl required className={classes.marginTop}>
                        <InputLabel
                            error={confirmPasswordErrors.error}
                            htmlFor="standard-adornment-confirmationPassword"
                        >
                            Confirm Password
                        </InputLabel>
                        <Input
                            id="standard-adornment-confirmationPassword"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            error={confirmPasswordErrors.error}
                            inputProps={{ maxLength: 25 }}
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
                        <FormHelperText
                            error={confirmPasswordErrors.error}
                            // eslint-disable-next-line react/no-children-prop
                            children={confirmPasswordErrors.description}
                        />
                    </FormControl>
                </form>
                <button className="primary-btn form-btn" onClick={formVerification}>
                    Login
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLoginForm: () => dispatch(actions.showLoginForm()),
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);
