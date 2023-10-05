import React from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ConversationBar = (props) => {
  const currentEntity = useSelector((state) => state.currentEntity);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {currentEntity.conversationInfo.map(
        (user) =>
          user.sub !== currentEntity.currentUserInfo.sub && (
            <>
              <Grid item md={2} key={user._id} sx={{ cursor: "pointer" }}>
                <Avatar
                  aria-label="recipe"
                  sx={{
                    marginLeft: "15px",
                    marginTop: "15px",
                    marginBottom: "15px",
                    marginRight: "0px",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  <img
                    src={user.picture}
                    alt="dp"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    // onClick={() => toggleDrawer()}
                  />
                </Avatar>
              </Grid>
              <Grid item md={3.3}>
                <Typography
                  sx={{
                    cursor: "pointer",
                    marginTop: "18px",
                    marginLeft: "0px",
                    fontSize: "19px",
                    color: "#fff",
                  }}
                >
                  {user.name}
                </Typography>
              </Grid>
              <Grid item md={3}></Grid>
              {/* <Grid
                item
                sx={{
                  cursor: "pointer",
                  marginTop: "18px",
                  marginLeft: "135px",
                  //   fontSize: "20px",
                  //   fontStyle: "bold",
                  color: "#fff",
                }}
              >
                {"count"}
              </Grid> */}
            </>
          )
      )}
    </Grid>
  );
};

export default ConversationBar;
