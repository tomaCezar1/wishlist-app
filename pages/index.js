import MainComponent from '../src/app/MainComponent/MainComponent';
import { getWishlists } from '../src/utils/httpRequests';

function Home({ data }) {
    return <MainComponent data={data} />;
}

export default Home;

export async function getServerSideProps() {
    const res = await getWishlists().catch((e) => console.log('Error: ', e.message));
    const data = await res.json();

    return {
        props: { data },
    };
}
