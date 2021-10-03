import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchButton from "../../components/search/button";
import ListToursCtrl from "../../controllers/list/Tours/ListToursCtrl"

export default function ListTours({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <SearchButton navigation={navigation} resourceType="tours" />
      <ListToursCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
