import { AsyncStorage } from "react-native";

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
  while (true) {}
};
