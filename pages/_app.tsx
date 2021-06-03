import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { useRouter } from 'next/router';

import Home from './index';
import reducer from '../src/store/reducers/reducer';
import watchSagas from '../src/store/sagas/sagas';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/styles/Theme/theme';
import '../src/styles/globals.scss';

function MyApp(props) {
    const { Component, pageProps } = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    // Redux
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(watchSagas);

    // Authenticaton
    const storeState = store.getState();
    const loginState = storeState.isLoggedIn;

    const router = useRouter();

    const ComponentToRender = !loginState && router.pathname === '/' ? Home : Component;

    return (
        <>
            <Head>
                <title>Wishlist App</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ComponentToRender {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
