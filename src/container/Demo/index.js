import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { FaStar } from "react-icons/fa";
// import SwipeableTemporaryDrawer from "./UI/Menu";
// import Header from "./UI/Header";
class Demo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const {classes} = this.props;
    const isMobile = window.innerWidth <= 500;
//console.log(isMobile,window.innerWidth)
    const tileData = [
      {
        img: '/image1.jpg',
        title: 'Breakfast',
        author: 'jill111',
        cols: 2,
        featured: true,
      },
      {
        img: '/image2.jpg',
        title: 'Tasty burger',
        author: 'director90',
      },
      {
        img: '/image3.jpg',
        title: 'Camera',
        author: 'Danson67',
      },
      {
        img: '/image4.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
      },
      {
        img: '/image1.jpg',
        title: 'Hats',
        author: 'Hans',
      },
      {
        img: '/image2.jpg',
        title: 'Honey',
        author: 'fancycravel',
      },
      {
        img: '/image3.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
      },
      {
        img: '/image4.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
      }
    ];
    
  return (
    <div className={classes.root}>
       <Grid container  spacing={8} direction="row" className={classes.mainGrid} >
      <Grid item xs={12}  >
              <Typography component="div">
                  <Typography  variant="h6" component="span" className={classes.left}>
                      Grid1 Images
                  </Typography>
                  <Typography variant="h6" component="span" className={classes.right}>
                      12
                  </Typography>
              </Typography>
        <Grid container justify="center" spacing={3}>
        
          <GridList className={classes.gridList} cols={isMobile ? 1.05 : 4}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} className={classes.gridFirst} style={{paddingRight:10}}>
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
        </Grid>
    </Grid>
    <Grid item xs={12} >
          <Typography component="div">
                  <Typography   component="span" className={classes.left}>
                      GridSecond Images
                  </Typography>
                  <Typography  component="span" className={classes.right}>
                      12
                  </Typography>
              </Typography>
        <Grid container justify="center" spacing={3}>
          <GridList className={classes.gridList} cols={isMobile ? 2.05 : 5}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} className={classes.gridSecond} style={{paddingRight:15}}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`}>
                        <StarBorderIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
          </GridList>
        </Grid>
     </Grid>
     <Grid item xs={12} >
            <Typography component="div">
                  <Typography  variant="h6" component="span" className={classes.left}>
                      GridThird Images
                  </Typography>
                  <Typography variant="h6" component="span" className={classes.right}>
                      12
                  </Typography>
              </Typography>
        <Grid container justify="center" spacing={3}>
          <GridList className={classes.gridList} cols={isMobile ? 1.05 : 3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} classes={{root:classes.gridThird}} style={{paddingRight:10}} >
                <img src={tile.img} alt={tile.title} />
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
                      $23
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
      </Grid>
    </Grid>

     </Grid>
  </div>
  )}
}
const styles  = theme => ({
  mainGrid:{padding:20},
  gridFirst: {
    paddingRight:20
  },
  gridSecond: {
    paddingRight:20
  },
  gridThird: {
    paddingRight:20
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingBottom:70
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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
export default withStyles(styles)(Demo);
