import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CitySelector from "../utils/CitySelector";
import { Grid } from "@material-ui/core";
import DatePicker from "../utils/DatePicker";
import history from "../utils/history";
import Button from "@material-ui/core/Button";
import image from "../resources/Images/busBackground.png";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "inherit",
    color: "black"
  },
  padding: {
    padding: 10
  },
  root: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    minHeight: 500
  }
}));

const LandingPage = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    from: null,
    to: null,
    date: null
  });
  const fromCallback = data => {
    console.log(data);
    setState({ ...state, from: data });
  };
  const toCallback = data => {
    setState({ ...state, to: data });
  };
  const dateCallback = date => {
    setState({ ...state, date: date });
  };

  const handleClick = () => {
    history.push("/trips", { state: state });
  };

  return (
    <div className={classes.root}>
      <div>
        <Grid container alignItems="center" justify="space-around">
          <Grid item lg={3} md={6} xs={12} className={classes.padding}>
            <CitySelector getData={fromCallback} name="From" />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <CitySelector getData={toCallback} name="To" />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <DatePicker getDate={dateCallback} />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Button
              // className={classes.button}
              variant="contained"
              color="primary"
              disabled={state.from === null || state.to === null}
              onClick={handleClick}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
