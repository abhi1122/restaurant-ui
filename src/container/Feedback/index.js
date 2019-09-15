import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FaStar } from "react-icons/fa";
import Rating from '@material-ui/lab/Rating';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


class Feedback extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const {classes} = this.props;
    const value =  {name:"BreakFast Lorem",price:"$12",image:"image1.jpg",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",rating:"4",textOver:"Lorem Ipsum"};
 
    const ItemPanel = () => (
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
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
      </Card>
    );

    const RatingPanel = () =>(
        <div className={classes.ratingDiv}>
            <Rating  value={3} className={classes.ratingClass} max={5}  onChange={(value) => console.log(`Rated with value ${value}`)} size="large"/>
        </div>
    )

    const CommentPanel = () =>(
      <div className={classes.btnDiv}>
          <TextareaAutosize className={classes.textAreaStyle} aria-label="minimum height" rows={6} cols={40} placeholder="Comment" /> 
          <br/>
          {/* <button type="submit" className="btn btn-submit">Submit Rating</button> */}
          <Button size="small"  color="primary"> Submit Rating  </Button>
      </div>
    )
  return (
    <>
    <div className={classes.root} >
      <Grid container direction="row" justify="center">
        <Grid item justify="center" >
          <ItemPanel />
          <RatingPanel />
          <CommentPanel />
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
  textAreaStyle:{
    padding: 10,borderRadius: 5, marginBottom:10
  },
  btnDiv:{
    textAlign:"center",padding:10
  },
  ratingClass:{
    justifyContent:"center"
  },
  ratingDiv:{
    padding:10,backgroundColor: "ghostwhite", marginTop:5, marginBottom:5, border: 2, borderRadius: 5
  },
  card: {
    maxWidth: 500
  },
  gridStyle:{
    width:500, padding:10
  },
  left : {
    float : "left"
  },
  right : {
    float : "right"
  },
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
export default withStyles(styles)(Feedback);
