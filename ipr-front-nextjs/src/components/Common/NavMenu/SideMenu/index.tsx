import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import { firstBlockMenuData, secondBlockMenuData } from 'helpers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'left';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  };

  const list = (anchor: Anchor) => {
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
        <List>
          {firstBlockMenuData.map((el: any) => {
            return (
              <Link href={el.link} key={el.title}>
                <ListItem button>
                  <ListItemIcon>
                    {el.icon === 'AddCircleOutlineIcon' && (
                      <AddCircleOutlineIcon />
                    )}
                    {el.icon === 'CallReceivedIcon' && <CallReceivedIcon />}
                    {el.icon === 'AutorenewIcon' && <AutorenewIcon />}
                    {el.icon === 'DeleteOutlineIcon' && <DeleteOutlineIcon />}
                    {el.icon === 'FormatListNumberedIcon' && (
                      <FormatListNumberedIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={el.title} />
                </ListItem>
              </Link>
            );
          })}
        </List>
        <Divider />
        <List>
          {secondBlockMenuData.map((el: any) => {
            return (
              <Link href={el.link} key={el.title}>
                <ListItem button>
                  <ListItemIcon>
                    {el.icon === 'ExitToAppIcon' && <ExitToAppIcon />}
                    {el.icon === 'LockOpenIcon' && <LockOpenIcon />}
                  </ListItemIcon>
                  <ListItemText primary={el.title} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    );
  };

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer('left', true)} color="inherit">
          <MenuIcon color="inherit" />
        </Button>
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
