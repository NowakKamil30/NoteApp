import {
  DELETE_NOTE,
  ADD_NOTE,
  DOWNLOAD_NOTES,
  DOWNLOAD_ID,
  TEXT_NOTE
} from "../action/types";
import { _retrieveData, _storeData } from "../helpers/useData";

const INITIAL_STATE = { notes: [] };

export default (state = INITIAL_STATE, action) => {
  console.log("action", action);
  switch (action.type) {
    case DOWNLOAD_ID:
      {
        const { currentid, error } = action.payload;
        if (error) {
          console.log("sth went wrong");
          return state;
        }
        const { notes } = state;
        notes.push({ text: "", color: "green", id: String(currentid) });
        return { ...state, notes };
      }
      break;
    case TEXT_NOTE:
      {
        const { id, text } = action.payload;
        const index = state.notes.findIndex(item => item.id === id);
        state.notes[index].text = text;
        _storeData("text-" + id, text);
        return { ...state, notes: state["notes"] };
      }
      break;
    case DOWNLOAD_NOTES:
      {
        const { payload } = action;
        return { ...state, notes: payload };
      }
      break;
    default:
      {
        return state;
      }
      break;
  }
};
