import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { connect, useSelector } from "react-redux";
import { textNote } from "../action";
import { _storeData, _retrieveData } from "../helpers/useData";

const NoteScreen = ({ navigation, onChange, data }) => {
  const { textInput, view } = styles;

  const id = navigation.getParam("id");
  const notes = useSelector(state => state.notes);
  const findCurrentText = () => {
    const index = data.findIndex(item => item.id === id);
    return String(data[index].text);
  };
  return (
    <View style={view}>
      <TextInput
        style={textInput}
        multiline={true}
        value={findCurrentText()}
        numberOfLines={20}
        onChangeText={value => {
          onChange(id, value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    textAlignVertical: "top"
  },
  view: {
    marginHorizontal: 10,
    marginVertical: 5
  }
});
const mapStateToProps = state => {
  return {
    data: state.notes.notes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChange: (id, text) => {
      dispatch(textNote(id, text));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteScreen);
