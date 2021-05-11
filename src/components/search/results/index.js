import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchInputCtrl from "../../../controllers/search/input/SearchInputCtrl";
import SearchList from "../list";

export default function SearchResults({
  setter,
  filteredResources,
  resourceType,
}) {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <SearchInputCtrl setter={setter} resourceType={resourceType} />
      <View style={styles.results}>
        <View style={styles.listHead}>
          {/* <Text style={styles.heading}>Search Query</Text> */}
          <Text style={styles.subheading}>
            Total Results | {filteredResources.length} items&nbsp;
          </Text>
        </View>
        <View style={{ flex: 1, paddingBottom: 100 }}>
          <SearchList
            resourceType={resourceType}
            resources={filteredResources}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    backgroundColor: "#f7f7f7",
    height: "100%",
    paddingBottom: 40,
    display: "flex",
    flexDirection: "column",
  },
  listHead: {
    paddingTop: 20,
    paddingBottom: 20,
    width: `100%`,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  heading: {
    color: "#333",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 21,
  },
  subheading: {
    color: "#333",
    fontSize: 12,
    // marginTop: 7,
  },
});
