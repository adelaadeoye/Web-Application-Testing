import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'reactstrap';
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    width:100,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();

  return (
    <div>
      
      <Button data-testid="strikeBtN" name='strike'color="success"  onClick={props.scoreSetterButton}>
        STRIKE
      </Button><Button data-testid="ballBtn" 
       variant="extended" color="success"name="ball"aria-label="delete" className={classes.fab}onClick={props.scoreSetterButton}>
        BALL
      </Button><Button data-testid="foulBtn" variant="extended"color="success" name="foul"  aria-label="delete" className={classes.fab}onClick={props.scoreSetterButton}>
        FOUL
      </Button><Button data-testid="hitBtn" variant="extended" color="success"name="hit"  aria-label="delete" className={classes.fab}onClick={props.scoreSetterButton}>
        HIT
      </Button>
      
    </div>
  );
}