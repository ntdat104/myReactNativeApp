import React from "react";
import { FlatList, View, Text } from "react-native";
import { User } from "../types/User";

const users: User[] = [
  {
    id: 1,
    name: "Tiến Đạt",
    isMale: true,
  },
  {
    id: 2,
    name: "Thanh Bình",
    isMale: true,
  },
  {
    id: 3,
    name: "Tuấn Anh",
    isMale: true,
  },
];

const Flatlist: React.FC = () => {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Flatlist;
