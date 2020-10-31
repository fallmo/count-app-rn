import React from "react";
import { View, StyleSheet } from "react-native";
import { CText } from "./CText";
import _def from "../theme";

export const CountItem = ({ label, count, color }) => {
  const s = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderColor: _def.borderColor,
      borderWidth: 1,
      height: 57,
      borderRadius: 10,
      marginBottom: 8,
    },
    lbl: {
      paddingLeft: 15,
      paddingRight: 4,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      flex: 1,
      justifyContent: "center",
    },
    box: {
      width: 90,
      borderLeftWidth: 1,
      borderLeftColor: _def.borderColor,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: color,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={s.container}>
      <View style={s.lbl}>
        <CText size={23}>{label}</CText>
      </View>
      <View style={s.box}>
        <CText size={28} weight="600">
          {count}
        </CText>
      </View>
    </View>
  );
};
