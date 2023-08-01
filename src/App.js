import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./Components/Messenger";
import { clientId } from "./Constants/Data";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Messenger />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
