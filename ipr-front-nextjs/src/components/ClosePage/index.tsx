import PageWrapper from 'components/Common/PageWrapper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { FC } from 'react';
import CloseContent from './CloseContent';

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

const ClosePage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <PageWrapper>
        <Container maxWidth="sm" disableGutters className={classes.root}>
          <CloseContent />
        </Container>
      </PageWrapper>
    </>
  );
};

export default ClosePage;
