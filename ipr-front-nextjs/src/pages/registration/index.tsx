import RegistrationPageComponent from 'components/RegistrationPage';
import axios from 'axios';
import { useState } from 'react';

const RegistrationPage = () => {
  const [registrationFormValue, setAuthFromValue] = useState<any>({
    firstName: '',
    lastName: '',
    login: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = async () => {
    try {
      if (
        registrationFormValue.password === registrationFormValue.repeatPassword
      ) {
        const { repeatPassword, ...payload } = registrationFormValue;
        const { data } = await axios.post(
          'http://0.0.0.0:8888/auth/registration',
          payload
        );
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <RegistrationPageComponent
      onSubmit={onSubmit}
      setFormValue={setAuthFromValue}
      formValue={registrationFormValue}
    />
  );
};

export default RegistrationPage;
