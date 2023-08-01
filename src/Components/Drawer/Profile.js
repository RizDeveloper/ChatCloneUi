import { Grid, Drawer } from "@mui/material";
import React from "react";

const Profile = (props) => {
  const handleClose = () => {
    props.setOpenDrawer(false);
  };

  return (
    <>
      <Drawer
        open={props.openDrawer}
        onClose={handleClose}
        hideBackdrop
        PaperProps={{
          style: {
            backgroundColor: "#343f46",
            height: "95%",
            width: "30%", // Change background color of the Menu
          },
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ height: "95%", width: "30%", color: "#111b21" }}
        >
          <Grid item>Hello</Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default Profile;
