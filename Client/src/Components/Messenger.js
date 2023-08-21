import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import Login from "./Account/Login";
import { useSelector } from "react-redux";
import ChatDialog from "./Chat/ChatDialog";
import { defaultProfilePicture, iconPDF } from "../Constants/Data";

const Messenger = () => {
  const currentEntity = useSelector((state) => state.currentEntity);

  return (
    <Grid container sx={{ height: "100vh", backgroundColor: "#111b21" }}>
      {Object.keys(currentEntity.currentUserInfo).length === 0 ? (
        <Grid item>
          <>
            <AppBar
              sx={{
                height: "250px",
                backgroundColor: "#00a884",
                boxShadow: "none",
              }}
            >
              <Toolbar>
                {" "}
                <Typography
                  sx={{
                    marginLeft: "200px",
                    marginTop: "30px",
                    textAlign: "left",
                    color: "#ffff",
                    fontWeight: "Bold",
                    fontSize: "18px",
                  }}
                >
                  {/* <img alt="alt" src={defaultProfilePicture} /> */}
                  Riz Chat
                </Typography>
              </Toolbar>
            </AppBar>
            <Login />
          </>
        </Grid>
      ) : (
        // <Grid>
        <>
          <ChatDialog />
        </>
        // </Grid>
      )}
    </Grid>
  );
};

export default Messenger;
