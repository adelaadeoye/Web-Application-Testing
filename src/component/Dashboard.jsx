import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      
      <Fab variant="extended" size="small"  aria-label="delete" className={classes.fab}>
        STRIKE
      </Fab><Fab variant="extended" size="small"aria-label="delete" className={classes.fab}>
        BALL
      </Fab><Fab variant="extended" size="small" aria-label="delete" className={classes.fab}>
        FOUL
      </Fab><Fab variant="extended" size="small" fullWidth={true} aria-label="delete" className={classes.fab}>
        HIT
      </Fab>
      
    </div>
  );
}