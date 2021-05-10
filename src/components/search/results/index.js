import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchInputCtrl from "../../../controllers/search/input/SearchInputCtrl";

export default function SearchResults({ setter }) {
  return (
    <View>
      <SearchInputCtrl setter={setter} />
      <Text>SearchResults</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
