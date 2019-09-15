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
//import Drawer from 'react-motion-drawer';
import { FaStar } from "react-icons/fa";
import CategorySlider from "../../component/GridSlider/Category";
import Comment from "../../component/Comment";
import { Link } from "react-router-dom";

// import SwipeableTemporaryDrawer from "./UI/Menu";
// import Header from "./UI/Header";
class Detail extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const {classes} = this.props;
    
   // const isMobile = window.innerWidth <= 500;
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
    const value =  {name:"BreakFast Lorem",price:"$12",image:"image1.jpg",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",rating:"4",textOver:"Lorem Ipsum"};
  return (
    <>
    <div className={classes.root} >
      <Grid  direction="column" justify="center">
        <Grid item  justify="center" >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={value.image}
                title="Contemplative Reptile"
              />
              {/* <div className={classes.overlayText}>
                {value.textOver}
            </div>
              <div className={classes.overlayStar}>
              <FaStar size={12} color="#DADA12"/> {value.rating}
            </div> */}
            <CardContent>
              <Typography component="div" className={classes.headingDiv}>
                  <Typography  variant="h6" component="span" className={classes.left}>
                    {value.name}
                  </Typography>
                  <Typography variant="h6" component="span" className={classes.right}>
                      <FaStar size={12} color="#DADA12"/> {value.rating}
                  </Typography>
                  
              </Typography>
              <Typography  component="div" >
                  We are trying the new look for our home-page where the background image takes the entire screen area image.
            </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
      </Card>
        </Grid>
        <Grid item  className={classes.gridPadding}>   
        <Typography component="div" className={classes.headingDiv}>
                  <Typography  variant="h6" component="span" className={classes.left}>
                    Categories
                  </Typography>
                  <Typography variant="h6" component="span" className={classes.right}>
                  <Link to="/category">more</Link>
                  </Typography>
                  
              </Typography>
            <CategorySlider categoryData={categoryData} />
            
        </Grid>

        <Grid>
            <h5>Comment</h5>
            <Comment />
        </Grid>
      </Grid>
      </div>
    </>
  )}
}
const styles  = theme => ({
  root: {
    flexGrow: 1,marginBottom:80
  },
  gridPadding:{padding:10},
  headingDiv:{height:40},
  description:{marginTop:30},
  textAreaStyle:{
    padding: 10,
    borderRadius: 5,
    marginBottom:10
  },
  btnDiv:{textAlign:"center",padding:10},
  ratingClass:{justifyContent:"center"},
  ratingDiv:{
    padding:10,
    backgroundColor: "ghostwhite",
    marginTop:5,
    marginBottom:5,
    border: 2,
    borderRadius: 5
  },
  card: {
    //maxWidth: 500
  },
  media: {
    height: 140,
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
export default withStyles(styles)(Detail);
