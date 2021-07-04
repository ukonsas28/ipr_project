import { createStyles, makeStyles } from '@material-ui/core/styles';
import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: '30px',
      marginBottom: '30px',
    },
    btn: {},
  });
});

const CloseContent: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h2" className={classes.title} paragraph>
          Нет доступа
        </Typography>
        <Divider />
        <Link href="/auth">
          <Button variant="outlined" color="primary" className={classes.btn}>
            Hа страницу авторизации
          </Button>
        </Link>
      </Paper>
    </>
  );
};

export default CloseContent;
