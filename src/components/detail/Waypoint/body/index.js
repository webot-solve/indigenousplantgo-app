import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import WaypointHeadCtrl from "../../../../controllers/detail/Waypoint/head/WaypointHeadCtrl";
import WaypointDescriptions from "../descriptions";
import WaypointRelated from "../related";
import Gallery from "../../../gallery";

export default function WaypointBody({ waypoint, topics, showPlant }) {
  return (
    <View style={{ paddingBottom: 200 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <WaypointHeadCtrl waypoint={waypoint} topics={topics} />
        <WaypointDescriptions
          description={waypoint.description}
          fields={waypoint.custom_fields}
        />
        <WaypointRelated resources={waypoint.plants} showDetail={showPlant} />
        {waypoint && waypoint.images && waypoint.images.length > 1 ? (
          <Gallery images={waypoint.images} resourceType="waypoints" />
        ) : null}
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
