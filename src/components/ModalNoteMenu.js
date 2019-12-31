import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text
} from "react-native";
import { connect } from "react-redux";
import { closeModalNoteMenu, deleteNote } from "../action";

const ModalNoteMenu = ({ noteId, notes, closeModal, deleteNote }) => {
  const { containerStyle, buttonContainerStyle } = styles;
  return (
    <Modal
      transparent
      animationType={"slide"}
      visible={noteId > -1 ? true : false}
      onRequestClose={() => closeModal()}
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={() => closeModal()}>
        <TouchableWithoutFeedback>
          <View style={containerStyle}>
            <View style={buttonContainerStyle}>
              <TouchableNativeFeedback
                onPress={() => {
                  deleteNote(noteId, notes);
                  closeModal();
                }}
              >
                <Text>Click!</Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: "40%",
    width: "70%",
    marginTop: "30%",
    alignSelf: "center",
    backgroundColor: "white"
  },
  buttonContainerStyle: {
    paddingBottom: 10
  }
});

const mapStateToProps = state => {
  return {
    noteId: state.modal.noteId,
    notes: state.notes.notes
  };
};
const mamDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(closeModalNoteMenu());
    },
    deleteNote: (id, notes) => {
      dispatch(deleteNote(id, notes));
    }
  };
};
export default connect(
  mapStateToProps,
  mamDispatchToProps
)(ModalNoteMenu);
