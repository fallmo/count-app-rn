import React from "react";
import { TextInput } from "react-native";

export const Input = ({ style, ...rest }) => {
  const s = {
    backgroundColor: "#F7F7F7",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingVertical: 7,
    paddingLeft: 15,
    paddingRight: 5,
    fontSize: 18,
    fontWeight: "300",
  };
  return (
    <TextInput
      returnKeyType="done"
      autoCompleteType="off"
      autoCorrect={false}
      style={{ ...s, ...style }}
      {...rest}
      placeholderTextColor="#D8D8D8"
    />
  );
};
