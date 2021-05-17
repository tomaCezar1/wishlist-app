import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import WishlistForm from '../Forms/WishlistForm';
import AuthForm from '../Forms/AuthForm';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import { getWishlists } from '../../utils/httpRequests';

interface Props {
    isLoggedIn: boolean;
    updateInitialWishlists: (data) => void;
    token: string;
    showForm: boolean;
    registerForm: boolean;
    wishlistsFromStore: { id: number; title: string; wishListDate: string }[];
}

function MainComponent(props: Props): JSX.Element {
    const {
        isLoggedIn,
        updateInitialWishlists,
        token,
        showForm,
        registerForm,
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
        showForm ? window.scrollTo(0, 0) : null;
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
                        {showForm ? <WishlistForm /> : null}
                    </>
                ) : (
                    <>
                        <LandingPage />
                        {registerForm ? <AuthForm /> : null}
                    </>
                )}
                <Footer />
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        showForm: state.showForm,
        registerForm: state.registerForm,
        wishlistsFromStore: state.allWishlists,
        isLoggedIn: state.isLoggedIn,
        token: state.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateInitialWishlists: (data) => {
            dispatch({ type: 'UPDATE_WISHLISTS', wishlists: data });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
