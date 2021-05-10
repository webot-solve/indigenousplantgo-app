import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { SearchDefault } from "../../../icons/Search";

export default function SearchInput({ searchQuery, setSearchQuery }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ ...styles.button, flexDirection: "row", padding: 3 }}>
          <SearchDefault style={{ flex: 1 }} />
          <TextInput
            onChangeText={(text) => setSearchQuery(text)}
            placeholderTextColor={"grey"}
            placeholder="Enter cryptocurrency symbol or name"
            style={styles.input}
            autoFocus={true}
            value={searchQuery}
            autoCapitalize="none"
          />
        </View>
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
  input: {
    width: "100%",
    color: "#333",
    paddingHorizontal: 10,
    borderRadius: 20,
    flex: 1,
  },
});
