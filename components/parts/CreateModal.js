import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ModalBG, ModalBody } from "../Modal";
import { Rectangle, Clickable } from "../Button";
import { CText } from "../CText";
import { Input } from "../Input";
import _def from "../../theme";
import { Context } from "../../context/Context";

export const CreateModal = ({ isOpen, Close }) => {
  const [count, setCount] = useState({
    label: "",
    count: "",
    color: "#C6FFC1",
  });

  const { createCount } = useContext(Context);

  const Create = () => {
    if (!count.label || isNaN(count.count) || !count.color) return;
    createCount(count);
    ClearFields();
    Close();
  };

  const ClearFields = () => {
    setCount({ label: "", count: "", color: "#C6FFC1" });
  };

  return (
    <ModalBG
      isOpen={isOpen}
      Close={() => {
        ClearFields();
        Close();
      }}
    >
      <ModalBody title="Create Count">
        <CText style={{ marginBottom: 5 }} size={20}>
          Count Label:
        </CText>
        <Input
          placeholder="Random Label"
          style={{ marginBottom: 15 }}
          value={count.label}
          maxLength={25}
          onChangeText={v => setCount({ ...count, label: v })}
        />
        <CText style={{ marginBottom: 5 }} size={20}>
          Initial Number:
        </CText>
        <Input
          placeholder="0"
          style={{ marginBottom: 15 }}
          keyboardType="number-pad"
          value={count.count}
          maxLength={4}
          onChangeText={v => setCount({ ...count, count: v })}
        />
        <CText style={{ marginBottom: 5 }} size={20}>
          Tag Color:
        </CText>
        <View style={s.colorGroup}>
          <Clickable
            onPress={() => setCount({ ...count, color: "#C7ECFF" })}
            style={{
              ...s.colorOpt,
              backgroundColor: "#C7ECFF",
              ...(count.color === "#C7ECFF" ? s.selectedOpt : {}),
            }}
          ></Clickable>
          <Clickable
            onPress={() => setCount({ ...count, color: "#C6FFC1" })}
            style={{
              ...s.colorOpt,
              backgroundColor: "#C6FFC1",
              ...(count.color === "#C6FFC1" ? s.selectedOpt : {}),
            }}
          ></Clickable>
          <Clickable
            onPress={() => setCount({ ...count, color: "#FBC7FF" })}
            style={{
              ...s.colorOpt,
              backgroundColor: "#FBC7FF",
              ...(count.color === "#FBC7FF" ? s.selectedOpt : {}),
            }}
          ></Clickable>
          <Clickable
            onPress={() => setCount({ ...count, color: "#FFC7C7" })}
            style={{
              ...s.colorOpt,
              backgroundColor: "#FFC7C7",
              ...(count.color === "#FFC7C7" ? s.selectedOpt : {}),
            }}
          ></Clickable>
          <Clickable
            onPress={() => setCount({ ...count, color: "#FFECC7" })}
            style={{
              ...s.colorOpt,
              backgroundColor: "#FFECC7",
              ...(count.color === "#FFECC7" ? s.selectedOpt : {}),
            }}
          ></Clickable>
        </View>
        <Rectangle label="Create" onPress={Create} />
      </ModalBody>
    </ModalBG>
  );
};

const s = StyleSheet.create({
  colorGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  colorOpt: {
    height: 35,
    width: 35,
    borderColor: _def.borderColor,
    borderWidth: 1,
    borderBottomColor: "#000",
  },
  selectedOpt: {
    borderWidth: 3,
    borderColor: "blue",
    borderBottomColor: "blue",
  },
});
