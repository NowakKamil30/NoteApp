import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { screens, colors } from "../../setting.json";

const NoteElement = ({ textItem, idItem, colorItem, onClick, onLongPress }) => {
  const selectColor = (colors, colorItem) => {
    console.log(colors, colorItem);
    const colorIndex = colors.findIndex(color => color.name === colorItem);
    if (colorIndex !== -1) {
      return colors[colorIndex].value;
    }
    return colors[0].value;
  };

  return (
    <TouchableNativeFeedback
      onPress={onClick}
      onLongPress={() => onLongPress(idItem)}
    >
      <View
        style={{
          ...styles.noteView,
          backgroundColor: selectColor(colors, colorItem)
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
