import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListWaypointsCtrl from "../../controllers/list/Waypoints/ListWaypointsCtrl";
import SearchButton from "../../components/search/button";

export default function ListWaypoints({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <SearchButton navigation={navigation} resourceType="waypoints" />
      <ListWaypointsCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
