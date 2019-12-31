import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  notes: notesReducer,
  modal: modalReducer
});
