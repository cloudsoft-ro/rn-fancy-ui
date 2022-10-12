import React from "react";
import { ColorValue, Text, TouchableOpacity } from "react-native";

type ButtonType = {
  onPress: () => void;
  children: any;
  fillColor?: ColorValue;
  containerStyle?: any;
  textStyle?: any;
};

export const Button = ({
  children,
  fillColor = "#d1d1d1",
  containerStyle,
  textStyle,
}: ButtonType) => {
  return (
    <TouchableOpacity
      testID="button"
      onPress={() => null}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: fillColor,
        borderRadius: 12,
        height: 48,
        width: 212,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "bold",
          //   fontFamily: "Roboto-Bold.ttf",
          ...textStyle,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
