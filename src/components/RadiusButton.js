import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const RadiusButton = ({ onClick }) => {
  return (
    <TouchableNativeFeedback style={styles.touch} onPress={onClick}>
      <View style={styles.button}>
        <FontAwesomeIcon style={styles.icon} icon={faPlus} size={25} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  touch: {
    borderRadius: 400
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 20,
    zIndex: 2,
    backgroundColor: "#CDDC39",
    borderRadius: 400,
    padding: 20
  },
  icon: {
    color: "white"
  }
});

export default RadiusButton;
