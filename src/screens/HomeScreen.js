import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect, useSelector } from "react-redux";
import NoteElement from "../components/NoteElement";
import RadiusButton from "../components/RadiusButton";
import { addNote } from "../action";

HomeScreen = ({ navigation, data, addNote }) => {
  const notes = useSelector(state => state.notes);
  return (
    <View style={styles.mainView}>
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
            text={item.text}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#AFB42B",
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
export default connect(
  mapStateToProps,
  { addNote }
)(HomeScreen);
