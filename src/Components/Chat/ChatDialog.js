import React from "react";
import { Grid } from "@mui/material";
import Menu from "../Menu/menu";
import EmptyChat from "./EmptyChat";
import ChatBox from "./ChatBox";

const ChatDialog = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={3} sx={{ minWidth: "450px" }}>
          <Menu />
        </Grid>
        <Grid
          item
          md={8.4}
          sx={{
            minWidth: "300px",
            width: "50px",
            height: "100%",
            // backgroundColor: "#222e35",
            borderLeft: "1px solid #1c2c33",
          }}
        >
          {/* <EmptyChat /> */}
          <ChatBox />
        </Grid>
        {/* <Grid md={2}></Grid> */}
      </Grid>
    </>
  );
};

export default ChatDialog;
