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
import { RadioButtons } from "react-native-radio-buttons";
import { connect } from "react-redux";
import { closeModalNoteMenu, deleteNote, changeColorNote } from "../action";
import { screens, colors } from "../../setting.json";

const ModalNoteMenu = ({
  noteId,
  notes,
  closeModal,
  deleteNote,
  changeColorNote
}) => {
  const options = colors.map(color => color.name);
  const {
    headerView,
    textStyle,
    containerStyle,
    buttonContainerStyle
  } = styles;
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
            <View style={headerView}>
              <Text style={textStyle}>Ustawienia notatki</Text>
            </View>
            <RadioButtons
              options={options}
              onSelection={selectedOption => {
                changeColorNote(selectedOption, noteId, notes);
              }}
            />
            <View style={buttonContainerStyle}>
              <TouchableNativeFeedback
                onPress={() => {
                  deleteNote(noteId, notes);
                  closeModal();
                }}
              >
                <Text style={textStyle}>Usuń</Text>
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
    width: "70%",
    marginTop: "30%",
    alignSelf: "center",
    borderRadius: screens.borderRadius,
    backgroundColor: "white"
  },
  headerView: {
    paddingVertical: 30,
    borderTopStartRadius: screens.borderRadius,
    borderTopEndRadius: screens.borderRadius,
    backgroundColor: screens.navigationHeaderColor
  },
  headerTextStyle: {
    fontSize: 22,
    textAlign: "center"
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center"
  },
  buttonContainerStyle: {
    paddingBottom: 10,
    paddingTop: 10
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
    },
    changeColorNote: (color, id, notes) => {
      dispatch(changeColorNote(color, id, notes));
    }
  };
};
export default connect(
  mapStateToProps,
  mamDispatchToProps
)(ModalNoteMenu);
