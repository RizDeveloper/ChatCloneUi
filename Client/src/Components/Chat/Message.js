import React from "react";
import { Grid } from "@mui/material";

import ChatBackgroundIcon from "../../Svg/ChatBackground";

const Message = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        backgroundImage: `url('https://unsplash.com/photos/gd3t5Dtbwkw')`,
        backgroundRepeat: "no-repeat",
        height: "80vh",
        width: "100%",
        overflowY: "scroll",
        backgroundSize: "cover",
      }}
    >
      <Grid item md={12} sx={{ height: "80vh" }}></Grid>
    </Grid>
  );
};

export default Message;
