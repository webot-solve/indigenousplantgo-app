import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import WaypointHeadCtrl from "../../../../controllers/detail/Waypoint/head/WaypointHeadCtrl";

export default function WaypointBody({ waypoint, topics }) {
  return (
    <View style={{ paddingBottom: 200 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <WaypointHeadCtrl waypoint={waypoint} topics={topics} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 0,
  },
});
