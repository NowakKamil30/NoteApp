import {
  OPEN_MODAL_NOTE_MENU,
  CLOSE_MODAL_NOTE_MENU,
  CHANGE_FOCUS_MODAL_RADIO_BUTTON
} from "../action/types";
import { colors } from "../../setting.json";
const INITIAL_STATE = { noteId: -1, colorItem: colors[0].name };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case OPEN_MODAL_NOTE_MENU:
      {
        const { noteId, colorItem } = action.payload;
        return { ...state, noteId, colorItem };
      }
      break;
    case CLOSE_MODAL_NOTE_MENU:
      {
        const { payload } = action;
        return { ...state, noteId: payload };
      }
      break;
    case CHANGE_FOCUS_MODAL_RADIO_BUTTON: {
      const { colorItem } = action.payload;
      return { ...state, colorItem };
    }
    default:
      {
        return state;
      }
      break;
  }
};
