import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Display from './Display';
import Dashboard from './Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      
      <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Display/>
        <br></br>
        <Divider dark />

        <Dashboard/>
      </Paper>
    </div>
    </Container>
  </React.Fragment>
    
  );
}