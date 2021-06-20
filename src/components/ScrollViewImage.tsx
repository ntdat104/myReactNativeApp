import React from "react";

import { ScrollView, Image, View } from "react-native";

const ScrollViewImage: React.FC = () => {
  return (
    <View>
      <ScrollView horizontal={true}>
        <Image
          source={{ uri: "https://picsum.photos/150/150" }}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/150/150" }}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/150/150" }}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/150/150" }}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
      </ScrollView>
      <ScrollView>
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
};

export default ScrollViewImage;
