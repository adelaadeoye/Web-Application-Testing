import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));

export default function Display(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant="h3" component="h3" data-testid="ball">
          BALLS
        </Typography>
        <Typography variant="h1" component="h1"  data-testid="ballCount">
        {props.ball}
        </Typography>
          </Paper>
          
        </Grid> 
        <Grid item xs={6}>
          <Paper className={classes.paper}><Typography variant="h3" component="h3"data-testid="strike">
          STRIKES
        </Typography>
        <Typography variant="h1" component="h1" data-testid="strikeCount">
        {props.strike}

        </Typography>
        </Paper>
        
        </Grid>
      </Grid>
    </div>
  );
}
