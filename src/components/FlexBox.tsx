import React from "react";
import { View } from "react-native";

const FlexBox: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "#4CAF50" }}></View>
        <View style={{ flex: 1, backgroundColor: "#F44336" }}></View>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "#2196F3" }}></View>
        <View style={{ flex: 1, backgroundColor: "#FFEB3B" }}></View>
        <View style={{ flex: 2, backgroundColor: "#4CAF50" }}></View>
      </View>
      <View style={{ flex: 3 }}>
        <View style={{ flex: 1, backgroundColor: "#F44336" }}></View>
        <View style={{ flex: 1, backgroundColor: "#FFEB3B" }}></View>
        <View style={{ flex: 2, backgroundColor: "#2196F3" }}></View>
      </View>
    </View>
  );
};

export default FlexBox;
