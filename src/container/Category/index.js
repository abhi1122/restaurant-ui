import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

class Category extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const {classes} = this.props;
    const menu = { "desserts" : [{name:"BreakFast Lorem",price:"$12",image:"/desserts/desert1.jpg"},
                    {name:"Dinner Lorem Ipsum",price:"$12",image:"/desserts/desert2.jpg"}],
                    "dishes" : [{name:"BreakFast Lorem",price:"$12",image:"/dishes/dish1.jpg"},
                    {name:"Dinner Lorem Ipsum",price:"$12",image:"/dishes/dish2.jpg"}],
                    "drinks" : [{name:"BreakFast Lorem",price:"$12",image:"/drinks/drink1.jpg"},
                    {name:"Dinner Lorem Ipsum",price:"$12",image:"/drinks/drink2.jpg"}]
                  };

    const CategoryListPanel = (props) => (
        <Grid container justify="center" >
          {menu.drinks.map((value,index) => (
            <Link to = "/detail">
              <Grid key={value} item className={classes.gridStyle} >
                <Paper style={{backgroundImage: `url(${value.image})`}} className={classes.paperContainer}> 
                  <h4 className={classes.textContainer}> {value.name} </h4>
                </Paper>
              </Grid>
            </Link>
          ))}
           {menu.dishes.map((value,index) => (
            <Link to = "/detail">
              <Grid key={value} item className={classes.gridStyle} >
                <Paper style={{backgroundImage: `url(${value.image})`}} className={classes.paperContainer}> 
                  <h4 className={classes.textContainer}> {value.name} </h4>
                </Paper>
              </Grid>
            </Link>
          ))}
           {menu.desserts.map((value,index) => (
            <Link to = "/detail">
              <Grid key={value} item className={classes.gridStyle} >
                <Paper style={{backgroundImage: `url(${value.image})`}} className={classes.paperContainer}> 
                  <h4 className={classes.textContainer}> {value.name} </h4>
                </Paper>
              </Grid>
            </Link>
          ))}
        </Grid>
    );

  return (
    <>
    <Grid container className={classes.root} >
      <Grid item xs={12}>
        <CategoryListPanel menu={menu} />
      </Grid>
    </Grid>
  </>
  )}
}
const styles  = theme => ({
  root :{paddingTop:10,paddingBottom:70},
  gridStyle:{
   // width:500
padding:"5px 10px"
  },
  paperContainer: {
        height:120,
        width:350,
        color:"white",
        backgroundPosition:"center center"
        //opacity:"0.5"
    },
    textContainer : {paddingTop:50,textAlign:"center"},
    rootContainer : {
      backgroundColor:"#2ce6e6"
    }
});
export default withStyles(styles)(Category);
