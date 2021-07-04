import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import {
  getUserPermission,
  AuthDataActionsTypes,
} from 'store/AuthData/actions';
import { getTokenCookies } from 'helpers/cookies';
import { wrapper } from '../store';
import 'assets/scss/main.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const token = getTokenCookies();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch({ type: AuthDataActionsTypes.loginUser, payload: token });
      dispatch(getUserPermission());
    }
  }, [token]);

  console.log(process.env.TEST);

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
