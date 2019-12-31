import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect, useSelector } from "react-redux";
import NoteElement from "../components/NoteElement";
import RadiusButton from "../components/RadiusButton";
import ModalNoteMenu from "../components/ModalNoteMenu";
import { addNote, downloadNotes, openModalNoteMenu } from "../action";
import { screens } from "../../setting.json";

HomeScreen = ({ navigation, data, addNote, onStart, openModalNoteMenu }) => {
  const notes = useSelector(state => state.notes);
  useEffect(onStart, []);
  return (
    <View style={styles.mainView}>
      <ModalNoteMenu />
      <RadiusButton
        onClick={() => {
          addNote();
        }}
      />
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <NoteElement
            onClick={() => {
              navigation.navigate("Note", {
                text: item.text,
                id: item.id
              });
            }}
            onLongPress={id => openModalNoteMenu(id)}
            textItem={item.text}
            idItem={item.id}
            colorItem={item.color}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: screens.backgroundColor,
    height: "100%",
    width: "100%"
  },
  list: {
    zIndex: 0
  }
});
const mapStateToProps = state => {
  return {
    data: state.notes.notes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onStart: () => {
      dispatch(downloadNotes());
    },
    addNote: () => {
      dispatch(addNote());
    },
    openModalNoteMenu: id => {
      dispatch(openModalNoteMenu(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
