import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainComponent from '../src/app/MainComponent/MainComponent';
import { getWishlists } from '../src/utils/httpRequests';

const checkforEmptyObject = (object): boolean => {
    if (Object.keys(object).length === 0 && object.constructor === Object) return true;
};

function Home({ data, wishlists, fetchInitialWishlists }): JSX.Element {
    useEffect(() => {
        fetchInitialWishlists(data);
    }, []);

    return <MainComponent data={checkforEmptyObject(wishlists) ? [] : wishlists} />;
}

const mapStateToProps = (state) => {
    return {
        wishlists: state.allWishlists,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialWishlists: (data) => {
            dispatch({ type: 'FETCH_WISHLISTS', wishlists: data });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export async function getServerSideProps() {
    const res = await getWishlists().catch((e) => console.log('Error: ', e.message));
    const data = await res.json();

    return {
        props: { data },
    };
}
