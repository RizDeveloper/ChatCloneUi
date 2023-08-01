import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import Login from "./Account/Login";
import { useSelector } from "react-redux";
import ChatDialog from "./Chat/ChatDialog";

const Messenger = () => {
  const currentEntity = useSelector((state) => state.currentEntity);

  return (
    <Grid container sx={{ height: "100vh", background: "#111b21" }}>
      {Object.keys(currentEntity.currentUserInfo).length === 0 ? (
        <>
          <AppBar
            sx={{
              height: "250px",
              backgroundColor: "#00a884",
              boxShadow: "none",
            }}
          >
            <Toolbar></Toolbar>
            <Typography>Riz Chat</Typography>
          </AppBar>
          <Login />
        </>
      ) : (
        <>
          <ChatDialog />
        </>
      )}
    </Grid>
  );
};

export default Messenger;
