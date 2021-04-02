import RegistrationPageComponent from 'components/RegistrationPage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registrationUserAction } from 'store/AuthData/actions';
import { getUserToken } from 'store/AuthData/selectors';

const RegistrationPage = () => {
  const [registrationFormValue, setAuthFromValue] = useState<any>({
    firstName: '',
    lastName: '',
    login: '',
    password: '',
    repeatPassword: '',
  });
  const router = useRouter();
  const token = useSelector(getUserToken);

  useEffect(() => {
    token && router.push('/');
  }, [token]);
  const dispatch = useDispatch();
  const onSubmit = async () => {
    dispatch(registrationUserAction(registrationFormValue));
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
