/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

export default function ComboBox(props) {
  const [destinations, setDestinations] = useState([]);
  const changeHandler = (event,value) => {
    console.log(value);
    props.getData(value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/destination")
      .then(res => {
        console.log(res);
        setDestinations(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Autocomplete
      id={props.name}
      options={destinations}
      onChange={changeHandler}
      getOptionLabel={option => option.destinationName}
      renderInput={params => (
        <TextField
          {...params}
          label={props.name}
          variant="outlined"
          style={{ maxWidth: 400,minWidth:250 }}
        />
      )}
    />
  );
}
