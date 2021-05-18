import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import WishlistForm from '../Forms/WishlistForm';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';

import { getWishlists } from '../../utils/httpRequests';
import { AppState } from '../../utils/interfaces';
import * as actions from '../../store/actions/actions';

interface Props {
    isLoggedIn: boolean;
    updateInitialWishlists: (data) => void;
    token: string;
    showWishlistForm: boolean;
    showRegisterForm: boolean;
    showLoginForm: boolean;
    wishlistsFromStore: { id: number; title: string; wishListDate: string }[];
}

function MainComponent(props: Props): JSX.Element {
    const {
        isLoggedIn,
        updateInitialWishlists,
        token,
        showWishlistForm,
        showRegisterForm,
        showLoginForm,
        wishlistsFromStore,
    } = props;

    const [wishlists, setWishlists] = useState([]);

    const fetchWishlists = async () => {
        const res = await getWishlists(token);
        const data = await res.json().catch((e) => console.log('Error: ', e.message));
        updateInitialWishlists(data);
    };

    // Smooth scroll to top when form is clicked
    useEffect(() => {
        showWishlistForm ? window.scrollTo(0, 0) : null;
    });

    useEffect(() => {
        if (token) fetchWishlists();
    }, []);

    useEffect(() => {
        setWishlists(wishlistsFromStore);
    }, [wishlistsFromStore]);

    return (
        <>
            <div className="page-container">
                <header>
                    <Navbar isLoggedIn={isLoggedIn} />
                </header>
                {isLoggedIn ? (
                    <>
                        <Dashboard wishlists={wishlists} />
                        {showWishlistForm ? <WishlistForm /> : null}
                    </>
                ) : (
                    <>
                        <LandingPage />
                        {showRegisterForm ? <RegisterForm /> : null}
                        {showLoginForm ? <LoginForm /> : null}
                    </>
                )}
                <Footer />
            </div>
        </>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        showWishlistForm: state.showWishlistForm,
        showRegisterForm: state.showRegisterForm,
        showLoginForm: state.showLoginForm,
        wishlistsFromStore: state.allWishlists,
        isLoggedIn: state.isLoggedIn,
        token: state.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateInitialWishlists: (wishlists) => {
            dispatch(actions.updateStoreWishlists(wishlists));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
