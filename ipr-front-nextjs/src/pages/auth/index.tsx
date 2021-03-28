import AuthPageComponent from 'components/AuthPage';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from 'helpers';
import { setTokenCookies } from 'helpers/cookies';

const AuthPage = () => {
  const [authFormValue, setAuthFromValue] = useState<any>({
    login: '',
    password: '',
  });
  const onSubmit = async () => {
    console.log(authFormValue, 'authFormValue');
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, authFormValue);
      setTokenCookies(data.token);
      console.log(data);
    } catch (e) {
      console.log(e, 'here');
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
