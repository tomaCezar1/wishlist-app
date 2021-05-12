import { useEffect } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';

function GlobalComponent({ data, showForm }): JSX.Element {
    // Smooth scroll to top when form is clicked
    useEffect(() => {
        showForm ? window.scrollTo(0, 0) : null;
    });

    return (
        <main className="container">
            <Navbar />
            <Dashboard wishlists={data} />
            {showForm ? <Form /> : null}
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        showForm: state.showForm,
    };
};

export default connect(mapStateToProps, null)(GlobalComponent);
