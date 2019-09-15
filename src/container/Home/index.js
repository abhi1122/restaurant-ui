import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CategorySlider from "../../component/GridSlider/Category";
import RestaurantSlider from "../../component/GridSlider/Restaurant"
class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const {classes} = this.props;
    const isMobile = window.innerWidth <= 500;
    const restData = [
      {
        img: '/restaurants/rest1.jpg',
        title: 'Kitkat Restaurant ',
        author: 'rest1',
        cols: 2,
        featured: true,
      },
      {
        img: '/restaurants/rest2.jpg',
        title: 'Nexi Restaurant ',
        author: 'rest2',
      },
      {
        img: '/restaurants/rest3.jpg',
        title: 'Camera Restuarant ',
        author: 'rest3',
      },
      {
        img: '/restaurants/rest4.jpg',
        title: 'Cravel Restaurant',
        author: 'rest4',
        featured: true,
      },
      {
        img: '/restaurants/rest5.jpg',
        title: 'Hats Restaurant',
        author: 'rest5',
      }
    ];
    const categoryData = [
      {
        img: '/drinks/drink2.jpg',
        title: 'Kitkat Restaurant ',
        author: 'jill111',
        cols: 2,
        featured: true,
      },
      {
        img: '/desserts/desert2.jpg',
        title: 'Camera Restuarant ',
        author: 'Danson67',
      },
      {
        img: '/dishes/dish3.jpg',
        title: 'Cravel Restaurant',
        author: 'fancycrave1',
        featured: true,
      },
      {
        img: '/drinks/drink5.jpg',
        title: 'Nexi Restaurant ',
        author: 'director90',
      },
      {
        img: '/desserts/desert4.jpg',
        title: 'Hats Restaurant',
        author: 'Hans',
      },
      {
        img: '/dishes/dish4.jpg',
        title: 'Plant Restaurant',
        author: 'fancycravel',
      },
      {
        img: '/dishes/dish5.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
      },
      {
        img: '/desserts/desert1.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
      }
    ];

    const restAllData = [
      {
        img: '/restaurants/rest6.jpg',
        title: 'Kitkat Restaurant ',
        author: 'jill111',
        cols: 2,
        featured: true,
      },
      {
        img: '/restaurants/rest5.jpg',
        title: 'Nexi Restaurant ',
        author: 'director90',
      },
      {
        img: '/restaurants/rest4.jpg',
        title: 'Camera Restuarant ',
        author: 'Danson67',
      },
      {
        img: '/restaurants/rest3.jpg',
        title: 'Cravel Restaurant',
        author: 'fancycrave1',
        featured: true,
      },
      {
        img: '/restaurants/rest2.jpg',
        title: 'Hats Restaurant',
        author: 'Hans',
      },
      {
        img: '/restaurants/rest1.jpg',
        title: 'Plant Restaurant',
        author: 'fancycravel',
      },
      {
        img: '/restaurants/rest6.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
      },
      {
        img: '/restaurants/rest3.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
      }
    ];
    
    const GridPanel1 = () => (
      <Grid container justify="center" spacing={3}>
        <RestaurantSlider restData={restData} />
      </Grid>
    );

    const GridPanel2 = () => (
      <Grid container justify="center" spacing={3}>
        <CategorySlider categoryData={categoryData} />
      </Grid>
    );
    
    const GridPanel3 = () => (
      <Grid container justify="center" spacing={3}>
          <RestaurantSlider restData={restData.reverse()} />
      </Grid>
    );
  return (
    <div className={classes.root}>
      <Grid container  spacing={5} direction="row" className={classes.mainGrid} >
          <Grid item xs={12}  >
              <Typography component="div">
                  <Typography  variant="h6" component="span" className={classes.left}>
                    Best Seller Restaurants
                  </Typography>
                  <Typography  component="span" className={classes.right}>
                      <Link to="/list">more</Link>
                  </Typography>
              </Typography>
              <GridPanel1 />
          </Grid>
          <Grid item xs={12} >
              <Typography component="div">
                  <Typography variant="h6"  component="span" className={classes.left}>
                      Categories
                  </Typography>
                  <Typography  component="span" className={classes.right}>
                      <Link to="/list">more</Link>
                  </Typography>
              </Typography>
              <GridPanel2 />
          </Grid>
          <Grid item xs={12} >
              <Typography component="div">
                  <Typography  variant="h6" component="span" className={classes.left}>
                     Restaurants list
                  </Typography>
                  <Typography  component="span" className={classes.right}>
                      <Link to="/list">more</Link>
                  </Typography>
              </Typography>
              <GridPanel3 />
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
export default withStyles(styles)(Home);
