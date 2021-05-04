import Head from 'next/head';
import Navbar from '../src/app/Navbar/NavBar';
import Dashboard from '../src/app/Dashboard/Dashboard';

function Home({ data }) {
    return (
        <>
            <Head>
                <title>Wishlist App</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <main className="container">
                <Navbar />
                <Dashboard wishlists={data} />
                <footer></footer>
            </main>
        </>
    );
}

export default Home;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:8080/api/wishlists').catch((e) =>
        console.log('Error: ', e.message)
    );
    const data = await res.json();

    return {
        props: { data },
    };
}
