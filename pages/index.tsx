import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainComponent from '../src/app/MainComponent/MainComponent';
import { getWishlists } from '../src/utils/httpRequests';

const checkforEmptyObject = (object): boolean => {
    if (Object.keys(object).length === 0 && object.constructor === Object) return true;
};

function Index(props): JSX.Element {
    const { isLoggedIn, data, wishlists, fetchInitialWishlists } = props;

    useEffect(() => {
        fetchInitialWishlists(data);
    }, []);

    return (
        <MainComponent
            isLoggedIn={isLoggedIn}
            data={checkforEmptyObject(wishlists) ? [] : wishlists}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        wishlists: state.allWishlists,
        isLoggedIn: state.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialWishlists: (data) => {
            dispatch({ type: 'FETCH_WISHLISTS', wishlists: data });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

export async function getServerSideProps() {
    const res = await getWishlists().catch((e) => console.log('Error: ', e.message));
    const data = await res.json();

    return {
        props: { data },
    };
}
