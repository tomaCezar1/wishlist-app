import { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

import Navbar from '../Navbar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';

function GlobalComponent({ data, showForm }) {
    // Prevent srolling when Form is open
    useEffect(() => {
        showForm
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'scroll');
    });

    return (
        <>
            <Head>
                <title>Wishlist App</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <main className="container">
                <Navbar />
                <Dashboard wishlists={data} />
                {showForm ? (window.scrollTo(0, 0), (<Form />)) : null}
            </main>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        showForm: state.showForm,
    };
};

export default connect(mapStateToProps, null)(GlobalComponent);
