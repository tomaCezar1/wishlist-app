import Head from 'next/head';
import { connect } from 'react-redux';

import Navbar from '../src/app/Navbar/NavBar';
import Dashboard from '../src/app/Dashboard/Dashboard';
import Form from '../src/app/Form/Form';
import { getWishlists } from '../src/utils/httpRequests';

function Home({ data, showForm }) {
    return (
        <>
            <Head>
                <title>Wishlist App</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <main className="container">
                <Navbar />
                <Dashboard wishlists={data} />
                {showForm ? <Form /> : null}
                <footer></footer>
            </main>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        showForm: state.showForm,
    };
};

export default connect(mapStateToProps, null)(Home);

export async function getServerSideProps() {
    const res = await getWishlists().catch((e) => console.log('Error: ', e.message));
    const data = await res.json();

    return {
        props: { data },
    };
}
