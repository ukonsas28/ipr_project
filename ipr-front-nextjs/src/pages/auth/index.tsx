import AuthPageComponent from 'components/AuthPage';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from 'helpers';
import { setTokenCookies } from 'helpers/cookies';
import { useRouter } from 'next/router';

const AuthPage = () => {
  const [authFormValue, setAuthFromValue] = useState<any>({
    login: '',
    password: '',
  });
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, authFormValue);
      setTokenCookies(data.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthPageComponent
      onSubmit={onSubmit}
      setFormValue={setAuthFromValue}
      formValue={authFormValue}
    />
  );
};

export default AuthPage;
