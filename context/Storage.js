import AsyncStorage from "@react-native-community/async-storage";

export const storeList = async list => {
  try {
    await AsyncStorage.setItem("@list", JSON.stringify(list));
  } catch (error) {
    console.log(error);
  }
};

export const retrieveList = async () => {
  try {
    const data = await AsyncStorage.getItem("@list");
    return JSON.parse(data) || [];
  } catch (error) {
    console.log(error);
  }
};
