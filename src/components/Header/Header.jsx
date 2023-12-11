import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, Toolbar, InputBase, Box } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="">
        <Typography variant="h5"></Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
