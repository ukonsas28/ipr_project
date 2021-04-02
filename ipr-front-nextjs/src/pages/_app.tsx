import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import {
  getUserPermission,
  UserDataActionsTypes,
} from 'store/UserData/actions';
import { getTokenCookies } from 'helpers/cookies';
import { wrapper } from '../store';
import 'assets/scss/main.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const token = getTokenCookies();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch({ type: UserDataActionsTypes.loginUser, payload: token });
      dispatch(getUserPermission());
    }
  }, [token]);

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
