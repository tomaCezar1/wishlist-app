import { connect } from 'react-redux';

import Settings from '@material-ui/icons/SettingsOutlined';
import Notifications from '@material-ui/icons/NotificationsOutlined';
import { Avatar } from '@material-ui/core';

import * as actions from '../../store/actions/actions';
import { AppState } from '../../utils/interfaces';

interface Props {
    isLoggedIn: boolean;
    username: string;
    toggleWishlistForm: () => void;
    toggleRegisterForm: () => void;
    toggleLoginForm: () => void;
}

function NavBar({
    isLoggedIn,
    username,
    toggleWishlistForm,
    toggleRegisterForm,
    toggleLoginForm,
}: Props): JSX.Element {
    return (
        <nav className={`${isLoggedIn ? 'navbar' : 'nav-landing-container'}`}>
            {isLoggedIn ? (
                <>
                    <div className="main-heading">
                        <h3 className="nav-greeting">Welcome back, {username}</h3>
                        <h1 className="nav-title">Your Dashboard</h1>
                    </div>
                    <div className="navbar-btn-wrapper">
                        <button className="primary-btn nav-btn" onClick={toggleWishlistForm}>
                            New Wishlist
                        </button>
                        <div className="nav-quick-access">
                            <Settings className="nav-icons" />
                            <Notifications className="nav-icons" />
                            <Avatar alt="Guest Image" className="nav-avatar" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="landing-heading">
                        <h1 className="nav-title">
                            Wishlist <span className="nav-2">2</span>
                        </h1>
                    </div>
                    <div className="landing-button-container">
                        <button
                            className="primary-btn nav-btn register-btn"
                            onClick={toggleRegisterForm}
                        >
                            Register
                        </button>
                        <button className="primary-btn nav-btn login-btn" onClick={toggleLoginForm}>
                            Login
                        </button>
                    </div>
                </>
            )}
        </nav>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        username: state.username,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleWishlistForm: () => dispatch(actions.showWishlistForm()),
        toggleRegisterForm: () => dispatch(actions.showRegisterForm()),
        toggleLoginForm: () => dispatch(actions.showLoginForm()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
