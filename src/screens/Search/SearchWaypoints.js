import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchResultsCtrl from "../../controllers/search/results/SearchResultsCtrl";

export default function SearchWaypoints({ navigation }) {
  return (
    <View>
      <SearchResultsCtrl navigation={navigation} resourceType={"waypoints"} />
    </View>
  );
}

const styles = StyleSheet.create({});
