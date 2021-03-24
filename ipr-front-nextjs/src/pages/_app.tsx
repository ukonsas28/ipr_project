import Head from 'next/head';
import 'assets/scss/main.scss';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>IPR-PROJECT</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
