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

export default function Display() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant="h3" component="h3">
          BALLS
        </Typography>
        <Typography variant="h1" component="h1">
          0
        </Typography>
          </Paper>
          
        </Grid> 
        <Grid item xs={6}>
          <Paper className={classes.paper}><Typography variant="h3" component="h3">
          STRIKES
        </Typography>
        <Typography variant="h1" component="h1">
          0
        </Typography>
        </Paper>
        
        </Grid>
      </Grid>
    </div>
  );
}
