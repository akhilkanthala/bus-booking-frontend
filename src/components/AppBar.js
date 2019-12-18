import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import history from "../utils/history";
import { Grid } from "@material-ui/core";
import image from "../resources/Images/busBackground.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "blue",
    backgroundImage: "url(" + image + ")",
    marginBottom: 50
  },
  menuButton: {
    marginRight: theme.spacing(2)
    // height:'20px'
  },
  title: {
    flexGrow: 1,
    cursor: "pointer"
  }
}));

const ButtonAppBar = props => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={1} container alignItems={"center"}></Grid>
            <Grid
              item
              xs={2}
              container
              justify={"flex-end"}
              alignItems={"center"}
            >
              <Typography
                variant="h6"
                onClick={() => history.push("/")}
                className={classes.title}
              >
                blueBus
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default ButtonAppBar;
