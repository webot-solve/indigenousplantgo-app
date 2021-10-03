import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SearchDefault } from "../../../icons/Search";

export default function SearchButton({ navigation, resourceType }) {

  const navigateTo = () => {
    if(resourceType === "plants"){
      navigation.navigate("Search Plants");
    }
    if(resourceType === "waypoints"){
      navigation.navigate("Search Waypoints");
    }
    if(resourceType === "tours"){
      navigation.navigate("Search Tours");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={navigateTo
            // resourceType === "plants"
            //   ? () => {
            //       navigation.navigate("Search Plants");
            //     }
            //   : () => {
            //       navigation.navigate("Search Waypoints");
            //     }
          }
          style={{ ...styles.button, flexDirection: "row", padding: 3 }}
        >
          <SearchDefault style={{ flex: 1 }} />
          <Text
            style={{ color: "gray", flex: 1, marginLeft: 10, lineHeight: 24 }}
          >
            Search {resourceType} by name, category, or tag
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#f7f7f7",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
