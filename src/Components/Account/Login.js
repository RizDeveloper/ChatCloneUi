import React, { useState } from "react";
import {
  Box,
  Dialog,
  List,
  ListItem,
  Typography,
  styled,
  Grid,
} from "@mui/material";
import { qrCodeImage } from "../../Constants/Data";
import Settings from "../../Svg/Setting";
import MoreVertIcon from "../../Svg/MoreVertIcon";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setAppObjects } from "../../Store/CurrentEntity";
import { AddUser } from "../../Services/Apis";
import {
  handleCustomException,
  handleException,
} from "../../Utils/ExceptionHandler";
import { useSnackbar } from "notistack";

const Component = styled(Box)`
  display: flex;
`;

// const Container = styled(Box)`
//   padding: 56px 0 56px 56px;
// `;

// const QrCode = styled("img")({
//   height: 264,
//   width: 264,
//   margin: "50px 0 0 50px",
// });

const Title = styled(Typography)`
  font-size: 30px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 35px;
    color: #4a4a4a;
  }
`;

const DialogStyles = {
  height: "96%",
  marginTop: "12%",
  width: "75%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "hidden",
  overFlow: "hidden",
};

const Strong = styled("Strong")({
  color: "#464647",
});

const Login = () => {
  const dispatch = useDispatch();
  const [obj, setObj] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onLoginSuccess = async (res) => {
    setIsLoading(true);
    const decoded = jwt_decode(res.credential);
    dispatch(
      setAppObjects({
        userInfo: decoded,
      })
    );
    await AddUser(decoded)
      .then((result) => {
        if (result.data.success === true) {
          setObj(result.data.data);
        } else {
          handleCustomException(enqueueSnackbar, result.data);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        handleException(enqueueSnackbar, err);
        setIsLoading(true);
      });
  };

  const onLoginError = (res) => {
    console.log("Login failed", res);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: DialogStyles }} hideBackdrop>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          // sx={{ backgroundColor: "#222e35" }}
        >
          <Component>
            <Grid item md={8} sx={{ marginLeft: "70px", marginTop: "70px" }}>
              {/* <Container> */}
              <Title>Use Riz Chat on your bzrowser:</Title>
              <StyledList>
                <ListItem>1. Open Whatsapp on your phone</ListItem>
                <ListItem>
                  2. Tap &nbsp; <Strong>Menu</Strong>&nbsp;
                  <MoreVertIcon /> &nbsp;or &nbsp; <Strong>Settings</Strong>
                  &nbsp;
                  <Settings /> &nbsp;and select &nbsp;{" "}
                  <Strong>Linked Devices</Strong>
                </ListItem>
                <ListItem>
                  3. Tap on &nbsp;<Strong>Link a device</Strong>
                </ListItem>
                <ListItem>
                  4. Point your phone to this screen to capture screenshot
                </ListItem>
              </StyledList>
              {/* </Container> */}
            </Grid>
            <Grid item md={4} sx={{ marginLeft: "185px", marginTop: "55px" }}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={qrCodeImage}
                  alt="qr code"
                  style={{ color: "#111b21" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "42%",
                    transform: "translateX(20%)",
                  }}
                >
                  <GoogleLogin
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                  />
                </Box>
              </Box>
            </Grid>
          </Component>
        </Grid>
      </Dialog>
    </>
  );
};

export default Login;
//  <Grid item md={8} sx={{ marginLeft: "70px", marginTop: "70px" }}>
//    {/* <Container> */}
//    <Title>Use Riz Chat on your browser:</Title>
//    <StyledList>
//      <ListItem>1. Click the signin button on the middle of QrCode</ListItem>
//      <ListItem>
//        2. It will open new small tap of google just click your gmail account
//        which you want to login with it
//        {/* Tap &nbsp; <Strong>Menu</Strong>&nbsp;
//                   <MoreVertIcon /> &nbsp;or &nbsp; <Strong>Settings</Strong>
//                   &nbsp;
//                   <Settings /> &nbsp;and select &nbsp;{" "}
//                   <Strong>Linked Devices</Strong> */}
//      </ListItem>
//      <ListItem>
//        3. On first time it will want all your authorization
//        {/* Tap on &nbsp;<Strong>Link a device</Strong> */}
//      </ListItem>
//      <ListItem>
//        4. And lastly it will automatically redirected to our home page
//        {/* Point your phone to this screen to capture screenshot */}
//      </ListItem>
//    </StyledList>
//    {/* </Container> */}
//  </Grid>;
