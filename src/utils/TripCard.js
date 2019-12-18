import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "inherit",
    color: "black"
  },
  padding: {
    padding: 20
  },
  paper: { padding: 20, paddingBottom: 0, margin: 20 },
  secondGrid: { paddingBottom: 0, padding: 20 },
  busCompany: { fontSize: 24, fontWeight: "bold" },
  text: { fontSize: 24, fontWeight: "bold" }
}));

const TripCard = props => {
  const classes = useStyles();
  const dep = new Date(props.res.departure).getTime();
  const arr = new Date(props.res.arrival).getTime();
  const diff = Math.floor((arr - dep) / (1000 * 60 * 60));
  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.padding}>
        <Grid item xs={3} className={classes.busCompany}>
          {props.res.busDetails.busCompany.companyName}
        </Grid>
        <Grid item xs={3} className={classes.text}>
          {props.res.departure.slice(11, 16)}
          <ArrowRightAltIcon />
          {props.res.arrival.slice(11, 16)}
        </Grid>
        <Grid item xs={2} className={classes.text}>
          {props.res.busDetails.busCompany.rating}
        </Grid>
        <Grid item xs={2} className={classes.text}>
          {props.res.price}
        </Grid>
        <Grid item xs={2} className={classes.text}>
          {props.res.availableSeats}Seats
        </Grid>
      </Grid>
      <Grid container className={classes.secondGrid}>
        <Grid item xs={3}>
          {props.res.busDetails.busType}
        </Grid>
        <Grid item xs={3}>
          Duration:
          {diff}hrs
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            Show Layout
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TripCard;
