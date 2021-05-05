import '../src/styles/globals.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import formReducer from '../src/store/reducers/formReducer';

function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const store = createStore(formReducer);

    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />;
            </Provider>
        </>
    );
}

export default MyApp;
