import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';
import { IoMdMenu } from "react-icons/io";

import { FaHome,FaTable } from "react-icons/fa";


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
    style = {{width:"250"}}
      // className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>   
          <ListItem  key='management_table'>
            <ListItemIcon> <FaTable size={24} /> </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItem>
          
        <ListItem button key='address_translation'>
                <ListItemIcon> <InboxIcon /> </ListItemIcon>
                <ListItemText primary="Shopping Cart" />
            </ListItem>
     

          <ListItem button key='home'>
                <ListItemIcon> <FaHome size={24} /> </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
      </List>
      
    </div>
  );

  
  return (
    <>
     
      <IoMdMenu size={28} onClick={toggleDrawer('right', true)} style={{marginLeft:"2px",cursor:"pointer",color:"grey"}}/>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </>
  );
}