import React, { useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Dashboard from "./component/Dashboard.jsx"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Display from './component/Display';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


function App() {
  const classes = useStyles();

  const [strike,setStrike]=useState(0)
  const [ball,setBall]=useState(0)
const scoreSetterButton = event => {
      event.preventDefault();
      if(event.target.name===strike){
        if(strike>=3|| ball>=4){
          setStrike(0);
          setBall(0);
        }
        else {
          setStrike(strike+1)
        }
      }
      else if(event.target.name==="foul"){
        if (strike< 2){
          setStrike(strike+1)
        }
        else {
          setStrike(strike)
        }
      }
      if(event.target.name==="strike"){
        if(strike>=3|| ball>=4){
          setStrike(0);
          setBall(0);
        }
        else {
          setStrike(strike+1)
        }
      }
      else if(event.target.name==="ball"){
        if(strike>=3|| ball>=4){
          setStrike(0);
          setBall(0);
        }
        else {
          setBall(ball+1)
        }
      }
      else if(event.target.name==="hit"){
          setStrike(0);
          setBall(0);
       
      }
      
    }
 
  return (
    <div className="App">
     <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      
      <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          America Baseball At Bat Hand Count
        </Typography>
        <Typography component="p">
        At Bat Is Adela Adeoye
        </Typography>
        <Display strike={strike} ball={ball}/>
        <br></br>
        <Divider dark />

       
       <Dashboard  scoreSetterButton={scoreSetterButton} />  
           </Paper>
    </div>
    </Container>
  </React.Fragment>
    
     
    </div>
  );
}

export default App;
