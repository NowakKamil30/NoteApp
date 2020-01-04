import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { screens, colors, property } from "../../setting.json";

const NoteElement = ({ textItem, idItem, colorItem, onClick, onLongPress }) => {
  console.log("NoteElement" + idItem);
  const selectColor = (colors, colorItem) => {
    const colorIndex = colors.findIndex(color => color.name === colorItem);
    if (colorIndex !== -1) {
      return colors[colorIndex].value;
    }
    return colors[0].value;
  };
  const showText = () => {
    const lines = textItem.trim().split("\n");
    const { shortTextLength, lineNumbers } = property;

    const isTextShorterThanShortTextLenght = textItem.length <= shortTextLength;
    const isLinesLessThanLineNumber = lines.length <= lineNumbers;

    if (isTextShorterThanShortTextLenght && isLinesLessThanLineNumber) {
      return textItem.trim();
    } else {
      let shortText = lines.slice(
        0,
        lines.length < lineNumbers ? lines.length : lineNumbers
      );
      shortText = shortText.join("\n");
      shortText = shortText.slice(
        0,
        shortText.length < shortTextLength ? shortText.length : shortTextLength
      );
      return shortText.trim() + "...";
    }
  };
  return (
    <>
      <TouchableNativeFeedback
        onPress={onClick}
        onLongPress={() => {
          onLongPress(idItem);
        }}
      >
        <View
          style={{
            ...styles.noteView,
            backgroundColor: selectColor(colors, colorItem)
          }}
        >
          <Text style={styles.noteText}>{showText()}</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  noteView: {
    borderRadius: screens.borderRadius,
    height: 150,
    marginVertical: 5,
    marginHorizontal: 30,
    paddingTop: 7,
    paddingBottom: 20,
    paddingHorizontal: 8
  },
  optionButton: {
    position: "absolute",
    top: 20,
    right: 20,
    height: 200,
    width: 200,
    backgroundColor: "red"
  },
  noteText: {
    fontSize: 15
  }
});

export default NoteElement;
