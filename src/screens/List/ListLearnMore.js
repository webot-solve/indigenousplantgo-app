import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import SearchButton from "../../components/search/button";
// import ListToursCtrl from "../../controllers/list/Tours/ListToursCtrl"
import ListLearnMoreCtrl from "../../controllers/list/LearnMore/ListLearnMoreCtrl";

export default function ListLearnMore({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      {/* <SearchButton navigation={navigation} resourceType="tours" /> */}
      
      {/* <ListToursCtrl navigation={navigation} /> */}
      <Text>Hello from Screen LearnMore</Text>
      <ListLearnMoreCtrl/>
    </View>
  );
}

const styles = StyleSheet.create({});
