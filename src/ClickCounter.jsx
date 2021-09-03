import React, { useState } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
//We will also learn react hooks
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import { AutorenewTwoTone } from "@material-ui/icons";

export default function ClickCounter() {
  const state = useState();   //useState is a function which returns a value and a function
  const [count, setCount] = useState(0);  //0 is initial value which is assigned to count 
  function IncNum() {
    setCount(count + 1);
  }
  function DecNum() {
    setCount(count - 1);
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box component="span" m={1}>


      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography  className={classes.title} color="textSecondary" gutterBottom>
            <h1>{count}</h1>
          </Typography>
          <Typography variant="body2" component="p">
            <Button onClick={IncNum} className={classes.btn} variant="contained">
              <AddBoxIcon />
            </Button>
            <Button onClick={DecNum} className={classes.btn} variant="contained">
              <IndeterminateCheckBoxIcon />
            </Button>

            <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    justifyContent: 'centre',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginLeft: 50,
  },

  btn: {
    marginLeft: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

