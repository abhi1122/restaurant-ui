import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class First extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const {classes} = this.props;
    const menu = [ {name:"BreakFast Lorem",price:"$12",image:"/banner/image1.jpg"},
                    {name:"Dinner Lorem Ipsum",price:"$12",image:"/banner/image4.jpg"},
                    {name:"Lunch Ipsum",price:"$12",image:"/banner/image3.jpg"},
                    {name:"Pie Lorem Ipsum",price:"$12",image:"/banner/image2.jpg"},
                    {name:"Dinner Lorem Ipsum",price:"$12",image:"/banner/image4.jpg"},
                    {name:"Lunch Ipsum",price:"$12",image:"/banner/image3.jpg"},
                    {name:"Pie Lorem Ipsum",price:"$12",image:"/banner/image2.jpg"}];

    const CategoryListPanel = (props) => (
        <Grid container justify="center" >
          {menu.map((value,index) => (
            <Grid key={value} item className={classes.gridStyle}>
              {/* <div className={classes.rootContainer} style={index > bgcolor.length ? {backgroundColor:`${bgcolor[index- bgcolor.length]}`} : {backgroundColor:`${bgcolor[index]}`}}> */}
              <Paper style={{backgroundImage: `url(${value.image})`}} className={classes.paperContainer}> 
                <h4 className={classes.textContainer}> {value.name} </h4>
              </Paper>
          {/* </div> */}
            </Grid>
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
padding:"20px"
  },
  paperContainer: {
        height:120,
        width:350,
        color:"white",
        //opacity:"0.5"
    },
    textContainer : {paddingTop:50,textAlign:"center"},
    rootContainer : {
      backgroundColor:"#2ce6e6"
    }
});
export default withStyles(styles)(First);
