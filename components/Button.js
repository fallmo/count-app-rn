import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { CText } from "./CText";
import _def from "../theme";

export const Rounded = props => {
  const s = StyleSheet.create({
    container: {
      borderColor: _def.borderColor,
      borderWidth: 1,
      backgroundColor: "#fff",
      height: 75,
      width: 190,
      borderRadius: 15,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    bar: {
      width: 4,
      height: 27,
      backgroundColor: "#000",
      position: "absolute",
    },
  });
  return (
    <Clickable {...props}>
      <View style={s.container}>
        <View style={s.bar}></View>
        <View style={{ ...s.bar, transform: [{ rotate: "90deg" }] }}></View>
      </View>
    </Clickable>
  );
};

export const Rectangle = ({ label, ...rest }) => {
  const s = {
    borderColor: _def.borderColor,
    borderWidth: 1,
    backgroundColor: "#C6FFC1",
    paddingVertical: 10,
    paddingHorizontal: 15,
  };
  return (
    <Clickable {...rest}>
      <View style={s}>
        <CText weight="700" center>
          {label}
        </CText>
      </View>
    </Clickable>
  );
};

export const Clickable = ({ children, style, ...rest }) => {
  const [pressing, setPressing] = useState(false);
  const shrink = { transform: [{ scale: pressing ? "0.95" : "1" }] };
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      {...rest}
      style={{ ...shrink, ...style }}
    >
      {children}
    </TouchableOpacity>
  );
};
