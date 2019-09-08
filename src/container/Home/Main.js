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

// import SwipeableTemporaryDrawer from "./UI/Menu";
// import Header from "./UI/Header";
class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const {classes} = this.props;
    const menu = [ {name:"BreakFast Lorem",price:"$12",image:"image1.jpg",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",rating:"4",textOver:"Lorem Ipsum"},
                   {name:"Dinner Lorem Ipsum",price:"$12",image:"image4.jpg",description:" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",rating:"4.5",textOver:"Dummy Lorem"},
                   {name:"Lunch Ipsum",price:"$12",image:"image3.jpg",description:"when an unknown printer took a galley of type and scrambled it to make a type specimen book",rating:"4.1",textOver:"Ipsum Lorem"},
                   {name:"Pie Lorem Ipsum",price:"$12",image:"image2.jpg",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",rating:"3.5",textOver:"Lorem Ipsum"}];
  return (
    <>
     
    <Grid container className={classes.root} >
      <Grid item xs={12}>
        <Grid container justify="center" >
          {menu.map(value => (
            <Grid key={value} item className={classes.gridStyle}>
              <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="160"
                        image={value.image}
                        title="Contemplative Reptile"
                      />
                      <div className={classes.overlayText}>
                        {value.textOver}
                    </div>
                      <div className={classes.overlayStar}>
                       <FaStar size={12} color="#DADA12"/> {value.rating}
                    </div>
                    <CardContent>
                    <Typography component="div">
                      <Typography  variant="h6" component="span" className={classes.left}>
                        {value.name}
                      </Typography>
                      <Typography variant="h6" component="span" className={classes.right}>
                        {value.price}
                      </Typography>
                      </Typography>
                      {/* <Typography gutterBottom variant="h5" component="h2">
                        {value.name}
                      </Typography> */}
                      {/* <Typography variant="body2" color="textSecondary" component="p">
                      {value.description}
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                    <CardActions>
                      {/* <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button> */}
                    </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    
    </Grid>
    </>
  )}
}
const styles  = theme => ({
  root :{paddingTop:10,paddingBottom:70},
  card: {
    maxWidth: 500
  },
  media: {
    height: 140,
  },
  gridStyle:{
    width:500,padding:"20px"
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
export default withStyles(styles)(Main);
