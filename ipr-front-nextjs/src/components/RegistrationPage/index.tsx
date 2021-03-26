import PageWrapper from 'components/Common/PageWrapper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import RegistrationForm from './RegistrationForm';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
});

const AuthPageComponent = () => {
  const classes = useStyles();
  return (
    <>
      <PageWrapper>
        <Container maxWidth="sm" disableGutters className={classes.root}>
          <RegistrationForm />
        </Container>
      </PageWrapper>
    </>
  );
};

export default AuthPageComponent;
