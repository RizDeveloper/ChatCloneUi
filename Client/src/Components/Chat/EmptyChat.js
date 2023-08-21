import React from "react";
import { Grid, Typography } from "@mui/material";
// import {
//   emptyChatImage,
//   chatBackgroud,
//   emptyProfilePicture,
// } from "../../Constants/Data";
import EmptyChatPic from "../../Svg/EmptyChatPic.png";

const EmptyChat = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        // sx={{ backgroundColorolor: "#222e35" }}
      >
        <Grid item>
          <span>
            <img
              src={EmptyChatPic}
              alt="empty chat"
              style={{
                // height: "400px",
                width: "400px",
                marginTop: "145px",
                marginLeft: "180px",
                // backgroundColor: "transparent",
              }}
            />
          </span>
        </Grid>
        <Grid item sx={{ marginLeft: "180px" }}>
          <Typography
            sx={{
              fontSize: "35px",
              color: "#d1d3b9",
              // marginLeft: "85px",
              fontFamily: "inherit",
              // marginRight: "30px",
              marginTop: "40px",
              fontWeight: 300,
            }}
          >
            WhatsApp Web
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#8696a0",
              // marginLeft: "85px",
              fontFamily: "inherit",
              // marginRight: "30px",
              marginTop: "10px",
              fontWeight: 300,
            }}
          >
            Send and receive messages without keeping your phone online.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default EmptyChat;
