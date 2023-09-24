import { combineReducers } from "redux";

// import menu from "./menu";
import currentEntity from "./CurrentEntity";
// import jwtAccessToken from "./jwtAccessToken";
// import reconcileIntercoReducer from "./reconcileIntercoReducer";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  //   menu,
  currentEntity,
  //   jwtAccessToken,
  //   reconcileIntercoReducer,
});

export default reducers;
