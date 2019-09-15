import React from 'react';
import { browserHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import { FaChevronLeft , FaHome , FaShoppingCart , FaBell , FaBookmark } from "react-icons/fa";
import AddIcon from '@material-ui/icons/Add';
//import MoreIcon from '@material-ui/icons/MoreVert';
import SwipeableTemporaryDrawer from "./Menu";
const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,backgroundColor:"#fbfbfb"
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    backgroundColor : "#0079f5"
  },
  icons:{color:"grey"},homeIcon:{paddingLeft:40}
}));

export default function Header() {
  const classes = useStyles();
console.log(window.location.href,'window.location.href',window.location.pathname)
  return (
    <div className={classes.root}>
    

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.icons}>
             
              <FaHome />
              <FaBookmark className={classes.homeIcon}/> 
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit" className={classes.icons}>
            
          <FaBell /> 
          <FaShoppingCart className={classes.homeIcon}/> 
          {/* <FaChevronLeft onClick={browserHistory.goBack}/>  */}
          </IconButton>
          {/* <IconButton edge="end" color="inherit"  aria-label="open drawer">
            <SwipeableTemporaryDrawer />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}