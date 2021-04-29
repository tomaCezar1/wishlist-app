import { Dashboard } from '@material-ui/icons';
import Head from 'next/head';
import Navbar from '../src/app/Navbar/NavBar';
import Sidebar from '../src/app/Sidebar/Sidebar';

function Home() {
    return (
        <>
            <Head>
                <title>Wishlist App</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <main className="container">
                <nav className="navbar">
                    <Navbar />
                </nav>
                {/* <section>
                    <Sidebar />
                    </section> */}
                <section>{/* <Dashboard /> */}</section>
                <footer></footer>
            </main>
        </>
    );
}

export default Home;
