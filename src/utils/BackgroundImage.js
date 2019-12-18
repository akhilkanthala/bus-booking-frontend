import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Image from "../resources/Images/busBackground.png";
// import "./Logo.css";
const useStyles = makeStyles(theme => ({
    Logo:{
        // backgroundColor:'white',
        // padding:'8px',
        // height:'40px',
        // width:'60px'
        // boxSizing: border-box,
        // borderRadius: 5
    }
    
}));
const BackgroundImage = props => {
    const classes = useStyles();
   return (

  <div >
    <img className={classes.Logo} src={Image} alt="background" />
  </div>
);
}
export default BackgroundImage;
