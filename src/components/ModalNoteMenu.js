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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { connect } from "react-redux";
import {
  closeModalNoteMenu,
  deleteNote,
  changeColorNote,
  changeFocusModalRadioButton
} from "../action";
import { screens, colors } from "../../setting.json";
import { ModalBottonButton } from "./ModalBottonButton";

const ModalNoteMenu = ({
  noteId,
  notes,
  colorItem,
  closeModal,
  deleteNote,
  changeColorNote,
  changeFocusModalRadioButton
}) => {
  const {
    headerView,
    textStyle,
    containerStyle,
    buttonContainerStyle
  } = styles;

  const onPress = color => {
    changeColorNote(color, noteId, notes);
    changeFocusModalRadioButton(color);
  };
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
            <View>
              <RadioForm animation={true}>
                {colors
                  .map(color => {
                    return { label: color.name, value: color.name };
                  })
                  .map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i}>
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={colorItem === obj.label}
                        onPress={color => {
                          onPress(color);
                        }}
                        borderWidth={1}
                        buttonInnerColor={obj.value}
                        buttonOuterColor={obj.value}
                        buttonWrapStyle={{ marginLeft: 10 }}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        onPress={color => {
                          onPress(color);
                        }}
                        labelStyle={{ fontSize: 20, color: obj.value }}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  ))}
              </RadioForm>
            </View>
            <ModalBottonButton
              title="Usuń" 
              onPress={() => {
                deleteNote(noteId, notes);
                closeModal();
              }}
            />
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
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  }
});

const mapStateToProps = state => {
  return {
    noteId: state.modal.noteId,
    colorItem: state.modal.colorItem,
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
    },
    changeFocusModalRadioButton: colorItem => {
      dispatch(changeFocusModalRadioButton(colorItem));
    }
  };
};
export default connect(
  mapStateToProps,
  mamDispatchToProps
)(ModalNoteMenu);
