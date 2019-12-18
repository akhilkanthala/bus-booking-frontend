import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import TripCard from "../utils/TripCard";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MultipleSelect from "../utils/MultipleSelect";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "inherit",
    color: "black"
  },
  padding: {
    margin: 20
  },
  firstPaper: { height: 40, color: "blue" },
  secondPaper: {
    color: "blue"
  },
  font: {
    fontSize: 24,
    fontWeight: "bold"
  },
  root: {
    backgroundColor: "#f7f7f7"
    // margin: 20
  }
}));

const TripsPage = props => {
  const classes = useStyles();
  const [trips, setTrips] = useState([]);
  const [busCompany, setBusCompany] = useState([]);
  const [selectedTrips, setSelectedTrips] = useState(trips);
  let busCompanies = [];
  busCompanies = Array.from(
    new Set(trips.map((trip, index) => trip.busDetails.busCompany.companyName))
  );

  const handleFilter = data => {
    setBusCompany(data);
  };
  useEffect(() => {
    setSelectedTrips(
      _.filter(trips, o =>
        busCompany.includes(o.busDetails.busCompany.companyName)
      )
    );
  }, [busCompany]);
  // });
  useEffect(() => {
    const prop = props.location.state.state;
    if (prop.from !== null && prop.to !== null && prop.date !== null) {
      const YYYY = prop.date.getFullYear();
      const mm = prop.date.getMonth() + 1;
      const dd = prop.date.getDate();
      Axios.get(
        `http://localhost:8080/trips?from=${prop.from.id}&to=${prop.to.id}&date=${YYYY}-${mm}-${dd}`
      )
        .then(res => {
          setTrips(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }, []);
  if (trips === null) {
    return <div>No trips available</div>;
  } else {
    return (
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className={classes.padding}>
            <Paper>
              <Grid item xs={12} className={classes.firstPaper}>
                <p className={classes.font}>
                  {props.location.state.state.from.destinationName}
                  <ArrowRightAltIcon />
                  {props.location.state.state.to.destinationName}
                </p>
              </Grid>
              <Grid item xs={12}>
                JourneyDate:{props.location.state.state.date.getDate()}/
                {props.location.state.state.date.getMonth() + 1}/
                {props.location.state.state.date.getFullYear()}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.padding}>
            <Paper className={classes.secondPaper}>
              <Grid container alignItems="center" justify="flex-start">
                <Grid item xs={2}>
                  Filter by
                </Grid>
                <Grid item xs={2}>
                  <MultipleSelect getData={handleFilter} data={busCompanies} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {selectedTrips.length !== 0
          ? selectedTrips.map((res, index) => (
              <div key={index}>
                <TripCard res={res} />
              </div>
            ))
          : trips.map((res, index) => (
              <div key={index}>
                <TripCard res={res} />
              </div>
            ))}
      </div>
    );
  }
};

export default TripsPage;
