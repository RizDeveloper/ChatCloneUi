import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "../../Svg/MoreVertIcon";
import Status from "../../Svg/Status";
import InfoDrawer from "../Drawer/InfoDrawer";

const Header = (props) => {
  const currentEntity = useSelector((state) => state.currentEntity);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={2}>
          <Avatar
            aria-label="recipe"
            sx={{
              marginLeft: "15px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <img
              src={currentEntity.currentUserInfo.picture}
              alt="dp"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onClick={() => toggleDrawer()}
            />
          </Avatar>
        </Grid>
        <Grid item md={10}>
          <span style={{ marginLeft: "235px" }} />
          <IconButton
            sx={{
              // marginLeft: "332px",
              marginTop: "10px",
              fontSize: "22px",
              color: "#aebac1",
            }}
          >
            <Status />
            <span style={{ marginRight: "5px" }} />
          </IconButton>
          <IconButton
            sx={{
              // marginLeft: "332px",
              marginTop: "10px",
              fontSize: "22px",
              color: "#aebac1",
            }}
          >
            <ChatIcon />
            <span style={{ marginRight: "5px" }} />
          </IconButton>
          <IconButton
            sx={{
              // marginLeft: "332px",
              marginTop: "10px",
              fontSize: "22px",
              color: "#aebac1",
            }}
          >
            <MoreVertIcon onClick={handleMenuClick} />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                style: {
                  backgroundColor: "#1c2c33", // Change background color of the Menu
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                onClick={() => {
                  setOpenDrawer(true);
                  handleClose();
                }}
                sx={{
                  color: "#aebac1",
                  fontSize: "15px",
                  paddingTop: "15px ",
                  paddingRight: "60px",
                  paddingBottom: "5px",
                  paddingLeft: "24px",
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#aebac1",
                  fontSize: "15px",
                  paddingTop: "15px",
                  paddingRight: "60px",
                  paddingBottom: "5px",
                  paddingLeft: "24px",
                }}
              >
                My account
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#aebac1",
                  fontSize: "15px",
                  paddingTop: "15px ",
                  paddingRight: "60px",
                  paddingBottom: "5px",
                  paddingLeft: "24px",
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </IconButton>
        </Grid>
        <InfoDrawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      </Grid>
    </>
  );
};

export default Header;
