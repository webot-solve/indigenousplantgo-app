import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListPlantsCtrl from "../../controllers/list/Plants/ListPlantsCtrl";
import SearchButton from "../../components/search/button";

export default function ListPlants({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <SearchButton navigation={navigation} resourceType="plants" />
      <ListPlantsCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
