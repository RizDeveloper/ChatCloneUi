import React, { useEffect, useState } from "react";
import { getusers } from "../../Services/Apis";
import { Grid, Divider } from "@mui/material";
import {
  handleCustomException,
  handleException,
} from "../../Utils/ExceptionHandler";
import { useDispatch } from "react-redux";
import CurrentEntity, {
  setConversation,
  setConversations,
} from "../../Store/CurrentEntity";
import ConversationBar from "./ConversationBar";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

const Conversation = (props) => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const currentEntity = useSelector((state) => state.currentEntity);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await getusers();
        if (result.status === 200) {
          dispatch(setConversations({ conversation: result.data }));
          // setData(result.data);
        } else {
          handleCustomException(enqueueSnackbar, result.data);
        }
      } catch (error) {
        handleException(enqueueSnackbar, error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {/* {currentEntity.conversationInfo.map(
        (user) =>
          user.sub !== currentEntity.currentUserInfo.sub && ( */}
      <Grid item md={12} sx={{ height: "81vh", overflowY: "auto" }}>
        {/* <div
          style={{
            // Set the width and height of the scrollbar
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(155, 155, 155, 0.5) transparent", // Change scrollbar color
            height: "100%",
            overflowY: "scroll",
            // padding: "10px", // Add some padding to make it visually better
          }}
        > */}
        <ConversationBar />
        <Divider
          sx={{ marginLeft: "85px", background: "#e9edef", opacity: "0.3" }}
        />
        {/* </div> */}
      </Grid>

      {/* )
      )} */}
    </Grid>
  );
};

export default Conversation;
