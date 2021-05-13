import { useEffect } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import WishlistForm from '../Forms/WishlistForm';
import AuthForm from '../Forms/AuthForm';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';

function MainComponent({ isLoggedIn, data, showForm, registerForm }): JSX.Element {
    // Smooth scroll to top when form is clicked
    useEffect(() => {
        showForm ? window.scrollTo(0, 0) : null;
    });

    return (
        <>
            <div className="page-container">
                <header>
                    <Navbar isLoggedIn={isLoggedIn} />
                </header>
                {isLoggedIn ? (
                    <>
                        <Dashboard wishlists={data} />
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
    };
};

export default connect(mapStateToProps, null)(MainComponent);
