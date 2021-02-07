import filtersReducer from "./filters";
import studiosReducer from "./studios";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters: filtersReducer,
  studios: studiosReducer,
});

export default rootReducer;
