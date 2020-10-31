import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ModalBody, ModalBG } from "../Modal";
import { CText } from "../CText";
import { Clickable } from "../Button";
import _def from "../../theme";
import { Context } from "../../context/Context";

export const ManageModal = ({ count, Close }) => {
  const { incrementCount, decrementCount, deleteCount } = useContext(Context);
  const opt = [
    {
      title: "Delete",
      action: () => {
        Close();
        deleteCount(count.id);
      },
    },
  ];

  return (
    <ModalBG isOpen={count} Close={Close}>
      <ModalBody title="Manage Count" options={opt}>
        <View style={s.body}>
          <CText center size={27} style={{ marginBottom: 5 }}>
            {count && count.label}
          </CText>
          <View style={{ ...s.display, backgroundColor: count && count.color }}>
            <CText size={50} weight="700" color="#696969">
              {count && count.count}
            </CText>
          </View>
          <View style={s.info}>
            <View style={s.row}>
              <CText color={_def.borderColor}>Last Updated:</CText>
              <CText color={_def.borderColor}>{count && count.updated}</CText>
            </View>
            <View style={s.row}>
              <CText color={_def.borderColor}>Date Created:</CText>
              <CText color={_def.borderColor}>{count && count.created}</CText>
            </View>
          </View>
        </View>
      </ModalBody>
      <View style={s.actionBtns}>
        <Clickable style={s.subBtn} onPress={() => decrementCount(count.id)}>
          <View style={s.bar}></View>
        </Clickable>
        <Clickable style={s.addBtn} onPress={() => incrementCount(count.id)}>
          <View style={s.bar}></View>
          <View style={{ ...s.bar, transform: [{ rotate: "0deg" }] }}></View>
        </Clickable>
      </View>
    </ModalBG>
  );
};

const s = StyleSheet.create({
  body: { paddingTop: 20 },
  display: {
    width: 115,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    borderColor: _def.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
  },
  actionBtns: {
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
    borderRadius: 10,
  },
  subBtn: {
    height: 65,
    width: "50%",
    backgroundColor: "#FFE0E0",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: _def.borderColor,
    borderWidth: 1,
    borderRightWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    height: 65,
    width: "50%",
    backgroundColor: "#C7FFCC",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: _def.borderColor,
    borderWidth: 1,
    borderLeftWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: 5,
    height: 28,
    backgroundColor: "#696969",
    position: "absolute",
    transform: [{ rotate: "90deg" }],
  },
  info: {
    marginTop: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
