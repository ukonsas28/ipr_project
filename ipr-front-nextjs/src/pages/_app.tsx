import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from 'store';
import 'assets/scss/main.scss';

function MyApp({ Component, pageProps }: any) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Head>
        <title>IPR-PROJECT</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
