import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      marginTop: '20px',
      padding: '30px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '48%',
      },
    },
    title: {
      fontSize: '18px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '5px',
      },
      [theme.breakpoints.up('sm')]: {
        marginBottom: '10px',
      },
    },
    body1: {
      flexGrow: 1,
      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '5px',
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: '10px',
      },
    },
  });
});
const ContentCard = ({ title, description, techList }: any) => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Divider />
        <Typography variant="body1" className={classes.body1}>
          {description}
        </Typography>
        <List>
          {techList.map((el: string) => {
            return (
              <ListItem button key={el}>
                <ListItemText primary={el} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </>
  );
};

export default ContentCard;
