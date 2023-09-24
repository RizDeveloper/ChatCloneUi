import React from "react";
import { Grid } from "@mui/material";

const ChatFooter = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        backgroundColor: "#1c2c33",
        height: "67px",
        width: "1065px",
        maxHeight: "100%",
        maxWidth: "100%",
      }}
    >
      <Grid item md={0.2}>
        <Avatar
          alt="user"
          sx={{
            marginLeft: "15px",
            marginTop: "15px",
            marginBottom: "15px",
            // width: "56px",
            // height: "56px",
          }}
        >
          <img
            src={currentEntity.currentUserInfo.picture}
            alt="dp"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Avatar>
      </Grid>
      <Grid
        item
        md={3}
        sx={{
          // marginLeft: "15px",
          marginTop: "10px",
          marginBottom: "15px",
          fontSize: "18px",
        }}
      >
        {currentEntity.currentUserInfo.name}
      </Grid>
      <Grid item md={6.8}></Grid>
      <Grid item md={2}>
        abcddd
      </Grid>
    </Grid>
  );
};

export default ChatFooter;
