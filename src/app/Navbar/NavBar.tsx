import { useState } from 'react';

import Settings from '@material-ui/icons/SettingsOutlined';
import Notifications from '@material-ui/icons/NotificationsOutlined';
import { Avatar } from '@material-ui/core';

function NavBar(): JSX.Element {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(true);
    };

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
                    <Settings style={{ color: '#8f92a1', fontSize: 24 }} />
                    <Notifications
                        style={{ color: '#8f92a1', fontSize: 24 }}
                        id="notifications-icon"
                    />
                    <Avatar alt="Guest Image" style={{ height: 48, width: 48 }} />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
