import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {classes} = this.props;
  return (
    <div >
      {/* <Card className={classes.card}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://raw.githubusercontent.com/mui-org/material-ui/master/docs/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        {/* <CardMedia
          className={classes.media}
          image="https://raw.githubusercontent.com/mui-org/material-ui/master/docs/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> */}
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {[0, 1, 2, 4].map(value => (
            <Grid key={value} item className={classes.gridStyle}>
              <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://raw.githubusercontent.com/mui-org/material-ui/master/docs/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                      />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    
    </Grid>
    </div>
  )}
}
const styles  = theme => ({
  card: {
    maxWidth: 500
  },
  media: {
    height: 140,
  },
  gridStyle:{
    width:500
  }
});
export default withStyles(styles)(Main);
