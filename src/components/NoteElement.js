import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { screens, colors } from "../../setting.json";

const NoteElement = ({ textItem, idItem, colorItem, onClick, onLongPress }) => {
  return (
    <TouchableNativeFeedback
      onPress={onClick}
      onLongPress={() => onLongPress(idItem)}
    >
      <View
        style={{
          ...styles.noteView,
          backgroundColor: colors.find(color => color.name === colorItem).value
        }}
      >
        <Text style={styles.noteText}>{textItem}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  noteView: {
    borderRadius: screens.borderRadius,
    height: 150,
    marginVertical: 5,
    marginHorizontal: 30,
    padding: 10
  },
  noteText: {}
});

export default NoteElement;
