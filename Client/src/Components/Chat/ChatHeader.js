import React from "react";
import { Grid, Avatar, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SearchIcon from "../../Svg/SearchIcon";
import MoreVertIcon from "../../Svg/MoreVertIcon";

const ChatHeader = () => {
  const currentEntity = useSelector((state) => state.currentEntity);
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
      <Grid item md={3}>
        <Typography
          sx={{
            marginLeft: "-5px",
            marginTop: "10px",
            cursor: "pointer",
            fontSize: "18px",
            color: "#fff",
            // font: "inherit",
            // fontWeight: "bold",
          }}
        >
          {currentEntity.currentUserInfo.name}
        </Typography>
        <Typography
          sx={{
            marginTop: "0px",
            marginBottom: "20px",
            marginLeft: "54px",
            marginRight: "0px",
            display: "flex",
            fontSize: "12px",
            color: "#8696a0",
          }}
        >
          Last seen
        </Typography>
      </Grid>
      <Grid item md={6.8}></Grid>
      <Grid item md={2} sx={{ marginLeft: "auto", end: "2px" }}>
        <IconButton
          sx={{
            // marginRight: "8px",
            marginLeft: "50px",
            marginBottom: "10px",
            marginTop: "12px",
            color: "#8696a0",
            fontWeight: "bold",
          }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          sx={{
            // marginRight: "8px",
            marginLeft: "8px",
            marginBottom: "10px",
            marginTop: "12px",
            color: "#8696a0",
            fontWeight: "bold",
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ChatHeader;
