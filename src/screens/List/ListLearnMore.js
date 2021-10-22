import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchButton from "../../components/search/button";
import ListLearnMoreCtrl from "../../controllers/list/LearnMore/ListLearnMoreCtrl";

export default function ListLearnMore({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ListLearnMoreCtrl navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({});
