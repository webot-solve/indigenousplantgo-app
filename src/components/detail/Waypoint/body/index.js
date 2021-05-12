import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import WaypointHeadCtrl from "../../../../controllers/detail/Waypoint/head/WaypointHeadCtrl";
import WaypointDescriptions from "../descriptions";
import WaypointRelated from "../related";
import Gallery from "../../../gallery";
import Videos from "../videos";
import AudiosCtrl from "../../../../controllers/audios/AudiosCtrl";

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
        {waypoint && waypoint.plants && waypoint.plants.length > 0 ? (
          <WaypointRelated resources={waypoint.plants} showDetail={showPlant} />
        ) : null}

        {waypoint && waypoint.images && waypoint.images.length > 1 ? (
          <Gallery images={waypoint.images} resourceType="waypoints" />
        ) : null}

        {waypoint && waypoint.videos && waypoint.videos.length > 0 ? (
          <Videos videos={waypoint.videos} />
        ) : null}

        {waypoint && waypoint.audio_files && waypoint.audio_files.length > 0 ? (
          <>
            <Text style={styles.fieldTitle}>Audio Snippets</Text>
            {waypoint.audio_files.map((audio, index) => (
              <AudiosCtrl key={index} audio={audio} />
            ))}
          </>
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
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
    paddingHorizontal: 15,
  },
});
