import Head from 'next/head';
import Navbar from '../src/app/Navbar/NavBar';
import Dashboard from '../src/app/Dashboard/Dashboard';

function Home() {
    return (
        <>
            <Head>
                <title>Wishlist App</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <main className="container">
                <Navbar />
                <Dashboard />
                <footer></footer>
            </main>
        </>
    );
}

export default Home;
