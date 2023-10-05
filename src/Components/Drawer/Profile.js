import React from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";

const Profile = () => {
  const currentEntity = useSelector((state) => state.currentEntity);
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sx={{ width: "455px" }}>
          <Avatar
            alt="user"
            sx={{
              width: 150,
              height: 150,
              marginTop: "40px",
              marginLeft: "145px",
            }}
          >
            <img
              src={currentEntity.currentUserInfo.picture}
              alt="dp"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Avatar>
        </Grid>
        <Grid item sx={{ display: "flex", width: "455px" }}>
          <AccountBoxIcon
            sx={{
              color: "#8696a0",
              marginLeft: "30px",
              marginRight: "30px",
              marginTop: "30px",
            }}
          />
          <Typography
            sx={{
              color: "#d1d7cf",
              marginRight: "20px",
              marginTop: "30px",
              fontSize: "18px",
              fontWeight: "200",
            }}
          >
            {currentEntity.currentUserInfo.name}
          </Typography>
        </Grid>
        <Grid item sx={{ width: "455px" }}>
          <Typography
            sx={{
              color: "#8696a0",
              marginLeft: "85px",
              marginRight: "30px",
              marginTop: "25px",
              fontWeight: 300,
            }}
            color="textPrimary"
          >
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", marginTop: "20px" }}>
          <InfoOutlinedIcon
            sx={{
              color: "#8696a0",
              marginLeft: "30px",
              marginRight: "30px",
              marginTop: "30px",
            }}
          />
          <Typography
            sx={{
              color: "#d1d7cf",
              marginRight: "20px",
              marginTop: "30px",
              fontSize: "18px",
              fontWeight: "200",
            }}
          >
            Eat | Sleep | Code | Repeat
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
