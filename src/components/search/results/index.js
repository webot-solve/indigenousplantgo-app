import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchInputCtrl from "../../../controllers/search/input/SearchInputCtrl";

export default function SearchResults({ setter, filteredResources }) {
  return (
    <View>
      <SearchInputCtrl setter={setter} />
      <View style={styles.results}>
        <View style={styles.listHead}>
          <Text style={styles.heading}>Search Query</Text>
          <Text style={styles.subheading}>
            Results | &nbsp;{filteredResources.length} items&nbsp;
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    backgroundColor: "#f7f7f7",
    height: "100%",
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
    marginTop: 7,
  },
});
