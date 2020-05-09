import { combineReducers } from "redux";
import todos from "./todo.reducer.js";
import filter from "./filter.reducer.js";

export default combineReducers({
  todos,
  filter,
});
