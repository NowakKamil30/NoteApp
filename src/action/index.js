import {
  ADD_NOTE,
  DELETE_NOTE,
  DOWNLOAD_NOTES,
  DOWNLOAD_ID,
  TEXT_NOTE
} from "./types";
import { _retrieveData, _storeData } from "../helpers/useData";

export const addNote = () => {
  let currentid;
  return dispatch =>
    _retrieveData("id")
      .then(id => {
        if (id === "undefined") {
          currentid = 1;
        } else {
          currentid = Number(id) + 1;
        }
        return _storeData("id", currentid);
      })
      .then(result => {
        dispatch({ type: DOWNLOAD_ID, payload: { currentid, error: false } });
        //return _retrieveData("usingID");
      })
      //.then(result => {})
      .catch(err => {
        console.log(err);
        dispatch({ type: DOWNLOAD_ID, payload: { currentid, error: true } });
      });
};

export const textNote = (id, text) => {
  console.log("work");

  return { type: TEXT_NOTE, payload: { id, text } };
};

export const deleteNote = id => ({ type: DELETE_NOTE, payload: id });
export const downloadNotes = () => {};
