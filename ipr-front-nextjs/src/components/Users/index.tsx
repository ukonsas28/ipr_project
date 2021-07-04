import PageWrapper from 'components/Common/PageWrapper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { FC } from 'react';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      margin: '20px',
    },
  });
});
interface IProps {
  data: any;
}

const UsersPageComponent: FC<IProps> = ({ data }: IProps) => {
  const classes = useStyles();

  return (
    <>
      <PageWrapper>
        <Container maxWidth="sm" disableGutters className={classes.root}>
          <Box className={classes.box}>
            <h1>{data.totalCount}</h1>
          </Box>

          {data.data.map((el: any) => {
            return (
              <div key={el.login}>
                {`${el.firstName} ${el.lastName} ${el.login}`}
              </div>
            );
          })}
        </Container>
      </PageWrapper>
    </>
  );
};

export default UsersPageComponent;
