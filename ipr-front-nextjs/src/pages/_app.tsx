import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../store';
import 'assets/scss/main.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>IPR-PROJECT</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
