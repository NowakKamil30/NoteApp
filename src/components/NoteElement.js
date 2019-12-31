import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const NoteElement = ({ text, id, onClick, onLongPress }) => {
  return (
    <TouchableNativeFeedback
      onPress={onClick}
      onLongPress={() => onLongPress(id)}
    >
      <View style={styles.noteView}>
        <Text style={styles.noteText}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  noteView: {
    borderRadius: 10,
    height: 150,
    backgroundColor: "#F1F295",
    marginVertical: 5,
    marginHorizontal: 30,
    padding: 10
  },
  noteText: {}
});

export default NoteElement;
