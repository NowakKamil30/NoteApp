import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { _storeData, _retrieveData } from "../helpers/useData";

const NoteScreen = ({ navigation }) => {
  const [text, useText] = useState(navigation.getParam("text"));
  const id = navigation.getParam("id");
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        value={String(text)}
        multiline={true}
        numberOfLines={40}
        onChangeText={value => {
          _storeData(String(id), value);
          useText(value);
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
export default NoteScreen;
