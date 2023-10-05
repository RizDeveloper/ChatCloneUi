import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";
import Search from "./Search";
import Conversation from "./Conversation";

const Menu = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid
          item
          md={12}
          sx={{
            background: "#1c2c33",
            width: "450px",
            height: "65px",
            display: "flex",
          }}
        >
          <Header />
        </Grid>
        <Grid item md={12}>
          <Search />
        </Grid>
        <Grid item md={12}>
          <Conversation />
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
