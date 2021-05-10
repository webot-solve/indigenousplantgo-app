import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WaypointDetailCtrl from "../../controllers/detail/Waypoint/WaypointDetailCtrl";

export default function DetailWaypoint({ route, navigation }) {
  let waypoint = {};
  if (route && route.params && Object.keys(route.params).length > 2)
    waypoint = route.params;

  return (
    <View>
      <WaypointDetailCtrl waypoint={waypoint} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
