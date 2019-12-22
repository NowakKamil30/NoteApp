import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import NoteElement from "../components/NoteElement";
import RadiusButton from "../components/RadiusButton";
import { _retrieveData, _storeData } from "../helpers/useData";

HomeScreen = ({ navigation }) => {
  const [data, useData] = useState([]);
  useEffect(() => {}, []);
  return (
    <View style={styles.mainView}>
      <RadiusButton
        onClick={() => {
          let currentid;
          _retrieveData("id")
            .then(id => {
              console.log(id);
              if (id === "undefined") {
                currentid = 1;
              } else {
                currentid = Number(id) + 1;
              }
              return _storeData("id", currentid);
            })
            .then(result => {
              console.log(currentid);
              useData([
                ...data,
                {
                  shortText: "sacascasvasvfasdfefasfeaf",
                  id: currentid,
                  color: "green"
                }
              ]);
              //return _retrieveData("usingID");
            })
            //.then(result => {})
            .catch(err => {
              console.log(err);
            });
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
                text: item.shortText,
                id: item.id
              });
            }}
            text={item.shortText}
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

export default HomeScreen;
