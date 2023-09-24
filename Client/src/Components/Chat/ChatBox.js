import React from "react";
import { Grid } from "@mui/material";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Message from "./Message";

const ChatBox = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item md={12}>
        {" "}
        <ChatHeader />{" "}
      </Grid>
      <Grid item md={12}>
        {" "}
        <Message />{" "}
      </Grid>
      <Grid item md={12}>
        {" "}
        <ChatFooter />{" "}
      </Grid>
    </Grid>
  );
};

export default ChatBox;
