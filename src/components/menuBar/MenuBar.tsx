import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const NavigationBar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };


  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Movie Searcher
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
              <ListItem>
                <ListItemIcon><HomeOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Home'/>
              </ListItem>
            </NavLink>
            <NavLink to='/search' style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem>
                <ListItemIcon><SearchOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Search' />
              </ListItem>
            </NavLink>
            <NavLink to='/favorites' style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem>
                <ListItemIcon><StarBorderOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Favorites'/>
              </ListItem>
            </NavLink>

          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavigationBar;

/*             {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none', color: 'black' }} key={key}>
                <ListItem button selected={activeRoute(prop.path)}>
                  <ListItemIcon>{prop.path === '/' ? <HomeOutlinedIcon/> : prop.path === '/search' ? <SearchOutlinedIcon/> : <StarBorderOutlinedIcon/>}</ListItemIcon>
                  <ListItemText primary={prop.sidebarName} />
                </ListItem>
                </NavLink>
              );
            })} */