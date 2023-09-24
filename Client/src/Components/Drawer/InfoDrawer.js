import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid, Drawer, Typography } from "@mui/material";
import Profile from "./Profile";

const InfoDrawer = (props) => {
  return (
    <>
      <Drawer
        open={props.openDrawer}
        onClose={() => props.setOpenDrawer(false)}
        hideBackdrop
        PaperProps={{
          style: {
            backgroundColor: "#111b21",
            height: "100%",
            width: "30%", // Change background color of the Menu
          },
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ height: "95%", width: "30%", color: "#202c33" }}
        >
          <Grid
            item
            sx={{
              backgroundColor: "#202c33",
              height: "107px",
              width: "455px",
              display: "flex",
            }}
          >
            <ArrowBackIcon
              onClick={() => props.setOpenDrawer(false)}
              sx={{
                color: "#fff",
                marginTop: "auto",
                padding: "18px",
                fontSize: "20px",
              }}
            />
            <Typography
              sx={{
                color: "#fff",
                marginTop: "auto",
                padding: "15px",
                fontSize: "20px",
              }}
            >
              Profile
            </Typography>
          </Grid>
          <Grid item sx={{ color: "#202c33" }}>
            <Profile />
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default InfoDrawer;
