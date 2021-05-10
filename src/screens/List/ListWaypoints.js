import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListWaypointsCtrl from "../../controllers/list/Waypoints/ListWaypointsCtrl";

export default function ListWaypoints({ navigation }) {
  return (
    <View>
      <ListWaypointsCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
