import PageWrapper from 'components/Common/PageWrapper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { FC } from 'react';
import AuthForm from './AuthForm';

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
});
interface IProps {
  onSubmit: any;
  setFormValue: any;
  formValue: any;
}

const AuthPageComponent: FC<IProps> = ({
  onSubmit,
  setFormValue,
  formValue,
}: IProps) => {
  const classes = useStyles();

  return (
    <>
      <PageWrapper>
        <Container maxWidth="sm" disableGutters className={classes.root}>
          <AuthForm
            onSubmit={onSubmit}
            setFormValue={setFormValue}
            formValue={formValue}
          />
        </Container>
      </PageWrapper>
    </>
  );
};

export default AuthPageComponent;
