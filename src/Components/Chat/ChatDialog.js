import React from "react";
import { Grid } from "@mui/material";
import Menu from "../Menu/menu";

const ChatDialog = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={2.5} sx={{ minWidth: "450px" }}>
          <Menu />
        </Grid>
        <Grid
          item
          md={7.5}
          sx={{
            minWidth: "300px",
            width: "74px",
            height: "100%",
            borderLeft: "1px solid #1c2c33",
          }}
        >
          Hello
        </Grid>
        <Grid md={2}></Grid>
      </Grid>
    </>
  );
};

export default ChatDialog;
