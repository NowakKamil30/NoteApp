import {
  ADD_NOTE,
  DELETE_NOTE,
  DOWNLOAD_NOTES,
  DOWNLOAD_ID,
  TEXT_NOTE,
  CLOSE_MODAL_NOTE_MENU,
  OPEN_MODAL_NOTE_MENU
} from "./types";
import {
  _retrieveData,
  _storeData,
  _removeData,
  getIdKeys,
  createArrayNotes
} from "../helpers/useData";

export const openModalNoteMenu = noteId => ({
  type: OPEN_MODAL_NOTE_MENU,
  payload: noteId
});

export const closeModalNoteMenu = () => ({
  type: CLOSE_MODAL_NOTE_MENU,
  payload: -1
});

export const downloadNotes = () => {
  return dispatch =>
    _retrieveData("usingID")
      .then(usingID => {
        return getIdKeys(usingID);
      })
      .then(keyArray => {
        return createArrayNotes(keyArray);
      })
      .then(keyArray => {
        dispatch({ type: DOWNLOAD_NOTES, payload: keyArray });
      });
};

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
        return _retrieveData("usingID");
      })
      .then(usingID => {
        let newUsingID = usingID;
        if (newUsingID === "undefined" || newUsingID === undefined) {
          newUsingID = "";
        }
        newUsingID += currentid + ";";
        return _storeData("usingID", newUsingID);
      })
      .then(result => {
        return _storeData(`color-${currentid}`, "green");
      })
      .then(result => {
        dispatch({ type: DOWNLOAD_ID, payload: { currentid, error: false } });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DOWNLOAD_ID, payload: { currentid, error: true } });
      });
};

export const textNote = (id, text) => {
  return { type: TEXT_NOTE, payload: { id, text } };
};

export const deleteNote = (id, notes) => {
  return dispatch => {
    const idArray = notes.map(note => note.id);
    const indexToDelete = idArray.findIndex(
      noteId => Number(noteId) === Number(id)
    );
    idArray.splice(indexToDelete, 1);
    notes.splice(indexToDelete, 1);
    const usingId = idArray.join(";") + ";";
    _removeData(`text-${id}`)
      .then(result => {
        return _removeData(`color-${id}`);
      })
      .then(result => {
        return _storeData("usingID", usingId);
      })
      .then(result => {
        dispatch({ type: DELETE_NOTE, payload: notes, error: false });
      })
      .catch(error => {
        dispatch({ type: DELETE_NOTE, payload: null, error: true });
      });
  };
};
