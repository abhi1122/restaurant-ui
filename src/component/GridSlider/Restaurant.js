import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import Drawer from 'react-motion-drawer';
import { FaStar } from "react-icons/fa";
import Rating from '@material-ui/lab/Rating';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
class Restaurant extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){

    const {classes,restData} = this.props;
    
    const isMobile = window.innerWidth <= 500;
  return (
    < >
    <GridList className={classes.gridList} cols={isMobile ? 1.05 : 4}>
            {restData.map((tile,index) => (
              <GridListTile key={index} className={classes.gridFirst} style={{paddingRight:10}}>
                  <img src={tile.img} alt={tile.title}  />
                    <div className={classes.overlayText}>
                        {tile.title}
                    </div>
                      <div className={classes.overlayStar}>
                      <FaStar size={12} color="#DADA12"/> {4}
                    </div>
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`}>
                      $43
                      </IconButton>
                    }
                  />
              </GridListTile>
            ))}
        </GridList>
  </>
  )}
}
const styles  = theme => ({
  root: {
    flexGrow: 1,marginBottom:80, marginTop:20
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },imgGrid:{
    width:200
  },
  title: {
    color:"black"
  },
  titleBar: {
    background:'#f9f9f9',height:"30px"
  },
  left : {float : "left"},
  right : {float : "right"},
  overlayText: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: 'black',
    backgroundColor: '#ffffffe0',
    float:"left",
    width:"100px",
    padding:2,
    border:"0.5px solid #cecaca",
    borderRadius:2
  },
  overlayStar: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'black',
    backgroundColor: '#ffffffe0',
    float:"right",
    width:"40px",
    padding:2,
    border:"0.5px solid #cecaca",
    borderRadius:2
  }
});
export default withStyles(styles)(Restaurant);
