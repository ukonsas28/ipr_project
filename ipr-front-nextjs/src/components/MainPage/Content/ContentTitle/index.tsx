import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      marginTop: '20px',
      padding: '30px',
    },
    title: {
      flexGrow: 1,
      fontSize: '20px',
    },
  });
});
const ContentTitle = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          Проект индивидуального развития сотрудника компании LAD - Широкова
          Алексея
        </Typography>
      </Paper>
    </>
  );
};

export default ContentTitle;
