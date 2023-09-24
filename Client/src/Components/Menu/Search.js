import React, { useState } from "react";
import { Grid, InputBase } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ChatSort from "../../Svg/ChatSort";

const Search = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: "85%",
        backgroundColor: "#1c2c33",
        height: "40px",
        marginTop: "7px",
        borderRadius: "10px",
        marginBottom: "7px",
        marginLeft: "15px",
        alignItems: "center",
      }}
    >
      <Grid item md={2}>
        {isTyping ? (
          <ArrowBackIcon
            sx={{ color: "#919191", height: "100%", marginTop: "8px" }}
          />
        ) : (
          <SearchIcon
            sx={{ color: "#919191", height: "100%", marginTop: "8px" }}
          />
        )}
      </Grid>
      <Grid item md={8}>
        <InputBase
          placeholder="Search or start a new chat"
          sx={{
            height: "10px",
            margin: "0px",
            fontSize: "15px",
            width: "100%",
            color: "white",
          }}
        />
        <ChatSort sx={{ color: "#919191", height: "100%", marginTop: "8px" }} />
      </Grid>
    </Grid>
  );
};

export default Search;
