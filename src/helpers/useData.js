import { AsyncStorage } from "react-native";
import { colors } from "../../setting.json";

export const _removeData = async key => {
  try {
    await AsyncStorage.removeItem(String(key));
  } catch (error) {
    console.log("err", error);
  }
};
export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(String(key), String(value));
  } catch (error) {
    console.log("err", error);
  }
};
export const _retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(String(key));
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log("err", error);
  }
};
export const getIdKeys = keys => {
  const keysArray = keys.split(";");
  keysArray.pop();
  return keysArray;
};

export const createArrayNotes = ids => {
  return Promise.all(
    ids.map(id => {
      let noteColor;
      return _retrieveData(`color-${id}`)
        .then(color => {
          const isCorrectColor = colors.filter(settingColor => {
            return settingColor === color;
          });
          if (isCorrectColor) {
            noteColor = color;
          } else noteColor = colors[0];
          return _retrieveData(`text-${id}`);
        })
        .then(text => {
          if (text == "undefined" || text == undefined) {
            text = "";
          }
          return { text, color: noteColor, id };
        });
    })
  );
};
