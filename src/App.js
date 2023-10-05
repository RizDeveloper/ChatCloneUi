import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Grid } from "@mui/material";
import Messenger from "./Components/Messenger";
import { clientId } from "./Constants/Data";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Grid>
          <Messenger />
        </Grid>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
