import React, { useRef, useState } from "react";
import trash_icon from "../assets/trash.png";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
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

export const ModalBody = ({ children, title, deleteItem }) => {
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
        <View>{deleteItem && <DeleteOption deleteItem={deleteItem} />}</View>
      </View>
      <View style={s.body}>{children}</View>
    </View>
  );
};

const DeleteOption = ({ deleteItem }) => {
  const [pressed, setPressed] = useState(false);
  const delayRef = useRef();

  const Delete = () => {
    closeTip();
    deleteItem();
  };

  const closeTip = () => {
    setPressed(false);
    clearTimeout(delayRef.current);
  };
  const openTip = () => {
    if (pressed) return setPressed(false);
    setPressed(true);
    delayRef.current = setTimeout(closeTip, 2000);
  };
  const s = StyleSheet.create({
    tooltip: {
      position: "absolute",
      display: pressed ? "flex" : "none",

      backgroundColor: "red",
      zIndex: 1,
      width: 125,
      height: 38,
      borderRadius: 10,
      right: 5,
      bottom: 20,
      shadowOffset: {
        width: 2,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    bgTip: {
      backgroundColor: "#fff",
      justifyContent: "center",
      borderColor: _def.borderColor,
      borderWidth: 1,
      flex: 1,
      borderRadius: 10,
    },
    icon: {
      width: 12,
      height: 15,
    },
  });
  return (
    <>
      <View style={s.tooltip}>
        <TouchableOpacity style={s.bgTip} activeOpacity={0.8} onPress={Delete}>
          <CText size={13} center>
            Confirm Delete
          </CText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={openTip}>
        <Image source={trash_icon} style={s.icon} />
      </TouchableOpacity>
    </>
  );
};
