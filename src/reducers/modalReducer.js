import { OPEN_MODAL_NOTE_MENU, CLOSE_MODAL_NOTE_MENU } from "../action/types";

const INITIAL_STATE = { noteId: -1 };

export default (state = INITIAL_STATE, action) => {
  console.log("action-modalReducer", action);
  switch (action.type) {
    case OPEN_MODAL_NOTE_MENU:
      {
        const { payload } = action;
        return { ...state, noteId: payload };
      }
      break;
    case CLOSE_MODAL_NOTE_MENU:
      {
        const { payload } = action;
        return { ...state, noteId: payload };
      }
      break;
    default:
      {
        return state;
      }
      break;
  }
};
