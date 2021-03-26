import AuthPageComponent from 'components/AuthPage';
import axios from 'axios';
import { useState } from 'react';

const AuthPage = () => {
  const [authFormValue, setAuthFromValue] = useState<any>({
    login: '',
    password: '',
  });
  const onSubmit = async () => {
    console.log(authFormValue, 'authFormValue');
    try {
      const { data } = await axios.post(
        'http://0.0.0.0:8888/auth/login',
        authFormValue
      );
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
