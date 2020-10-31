import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { CText } from "./CText";

import _def from "../theme";

export const ModalBG = ({ children, isOpen, Close }) => {
  const s = StyleSheet.create({
    container: {
      display: isOpen ? "flex" : "none",
      position: "absolute",
      top: -50,
      bottom: -50,
      left: 0,
      right: 0,
      zIndex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      backgroundColor: "#00000040",
      position: "absolute",
      width: "100%",
      height: "100%",
    },
  });

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.overlay}
        onPress={Close}
        activeOpacity={1}
      ></TouchableOpacity>
      {children}
    </View>
  );
};

export const ModalBody = ({ children, title, options }) => {
  const s = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: 15,
      width: "80%",
    },
    title: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 2,
      marginBottom: 20,
    },
    body: {},
  });

  return (
    <View style={s.container}>
      <View style={s.title}>
        <CText size={16} weight="700">
          {title}
        </CText>
        <View>{options && <Options options={options} />}</View>
      </View>
      <View style={s.body}>{children}</View>
    </View>
  );
};

const Options = ({ options }) => {
  const [toggled, setToggled] = useState(false);
  const s = StyleSheet.create({
    container: {},
    toggle: {
      paddingHorizontal: 10,
      paddingVertical: 3,
    },
    dot: {
      width: 3,
      height: 3,
      backgroundColor: "#000",
      marginBottom: 2,
    },
    box: {
      position: "absolute",
      right: 14,
      top: 18,
      borderTopWidth: 1,
      borderColor: _def.borderColor,
      backgroundColor: "#000",
      display: toggled ? "flex" : "none",
      shadowOffset: {
        width: 2,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    item: {
      width: 100,
      height: 40,
      borderWidth: 1,
      borderTopWidth: 0,
      backgroundColor: "#fff",
      borderColor: _def.borderColor,
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      backgroundColor: "red",
      position: "absolute",
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height,
      left: 0,
    },
  });
  return (
    <>
      <View style={s.container}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setToggled(!toggled)}
        >
          <View style={s.toggle}>
            <View style={s.dot}></View>
            <View style={s.dot}></View>
            <View style={s.dot}></View>
          </View>
        </TouchableOpacity>
        <View style={s.box}>
          {options.map(item => (
            <TouchableOpacity
              key={item.title}
              onPress={() => {
                setToggled(false);
                item.action();
              }}
              activeOpacity={0.8}
            >
              <View style={s.item} key={item.title}>
                <CText size={17}>{item.title}</CText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};
