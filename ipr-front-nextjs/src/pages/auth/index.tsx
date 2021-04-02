import AuthPageComponent from 'components/AuthPage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from 'store/AuthData/actions';
import { getUserToken } from 'store/AuthData/selectors';

const AuthPage = () => {
  const [authFormValue, setAuthFromValue] = useState<any>({
    login: '',
    password: '',
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector(getUserToken);

  useEffect(() => {
    token && router.push('/');
  }, [token]);

  const onSubmit = () => {
    dispatch(loginUserAction(authFormValue));
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
