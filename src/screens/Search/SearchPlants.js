import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchResultsCtrl from "../../controllers/search/results/SearchResultsCtrl";

export default function SearchPlants({ navigation }) {
  return (
    <View>
      <SearchResultsCtrl navigation={navigation} resourceType={"plants"} />
    </View>
  );
}

const styles = StyleSheet.create({});
