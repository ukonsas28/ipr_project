import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from 'store/UserData/selectors';
import Avatar from '@material-ui/core/Avatar';
import { logoutUserAction } from 'store/UserData/actions';
import SideMenu from './SideMenu';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
      color: '#fff',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: '18px',
      cursor: 'pointer',
    },
  });
});

export default function NavMenu() {
  const classes = useStyles();
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logoutUserAction(token));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <SideMenu />
          </IconButton>
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              IPR-PROJECT
            </Typography>
          </Link>
          {token ? (
            <>
              <Avatar />
              <Button onClick={logoutUser} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <Link href="/auth">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
