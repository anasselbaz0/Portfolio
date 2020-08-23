import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../Logo/Logo';
import { AccountCircle, AccountTree, Email, GitHub, Home, LinkedIn } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';
import './Navigation.style.css';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginLeft: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    height: '100vh',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  flex: {
    display: 'flex',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  linkButton: {
    color: '#fff'
  },
  link: {
    textDecoration: 'none',
    color: COLORS.ACCENT
  },
}));

export default function PersistentNavigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [links, setLinks] = React.useState(['Projects', 'Resume', 'Contact']);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      <Toolbar className={classes.spaceBetween}>
          <div className={classes.flex} >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Logo/>
          </div>
          <div className={classes.flex}> {/* Social links */}
            <a className={classes.linkButton} target="_blank" href="https://github.com/anasselbaz0">
              <IconButton
                color="inherit"
                // onClick='https://github.com/anasselbaz0'
                edge="start"
                className={classes.menuButton}
              >
                <GitHub/>
              </IconButton>
            </a>
            <a className={classes.linkButton} target="_blank" href="https://www.linkedin.com/in/anass-elbaz">
              <IconButton
                color="inherit"
                // onClick='https://www.linkedin.com/in/anass-elbaz'
                edge="start"
                className={classes.menuButton}
              >
                <LinkedIn/>
              </IconButton>
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='' className={classes.link}>
            <ListItem button >
              <ListItemIcon> <Home/> </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>
          <Link to='projects' className={classes.link}>
            <ListItem button >
              <ListItemIcon> <AccountTree/> </ListItemIcon>
              <ListItemText primary={'Projects'} />
            </ListItem>
          </Link>
          <Link to='resume' className={classes.link}>
            <ListItem button>
              <ListItemIcon> <AccountCircle/> </ListItemIcon>
              <ListItemText primary={'Resume'} />
            </ListItem>
          </Link>
            <Divider/>
          <Link to='contact' className={classes.link}>
            <ListItem button>
              <ListItemIcon> <Email/> </ListItemIcon>
              <ListItemText primary={'Contact'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.content}
      </main>
    </div>
  );
}
