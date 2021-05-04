import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default function ListPlants({ plants, showDetail }) {
  return (
    <FlatList
      style={styles.flatList}
      keyExtractor={(plant) => plant._id}
      data={plants}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              showDetail(item);
            }}
          >
            <Text>{item.plant_name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
});
