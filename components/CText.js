import React from "react";
import { Text } from "react-native";
import _def from "../theme";

export const CText = ({
  size = _def.fontSize,
  color = _def.color,
  weight = _def.fontWeight,
  center,
  style,
  children,
  ...rest
}) => {
  const custom = {
    fontSize: size,
    color: color,
    fontWeight: weight,
    textAlign: center ? "center" : "left",
  };
  return (
    <Text style={{ ...style, ...custom }} {...rest}>
      {children}
    </Text>
  );
};
