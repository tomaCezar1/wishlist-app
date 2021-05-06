import { connect } from 'react-redux';

import Settings from '@material-ui/icons/SettingsOutlined';
import Notifications from '@material-ui/icons/NotificationsOutlined';
import { Avatar } from '@material-ui/core';

function NavBar({ toggleForm }): JSX.Element {
    return (
        <nav className="navbar">
            <div className="main-heading">
                <h3 className="nav-greeting">Welcome back, Guest</h3>
                <h1 className="nav-title">Your Dashboard</h1>
            </div>
            <div className="navbar-btn-wrapper">
                <button className="card-btn primary-btn nav-btn" onClick={toggleForm}>
                    New Wishlist
                </button>
                <div className="nav-quick-access">
                    <Settings className="nav-icons" />
                    <Notifications className="nav-icons" />
                    <Avatar alt="Guest Image" className="nav-avatar" />
                </div>
            </div>
        </nav>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: () => dispatch({ type: 'SHOW_FORM' }),
    };
};

export default connect(null, mapDispatchToProps)(NavBar);
