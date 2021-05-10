import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapCtrl from "../../../controllers/map/MapCtrl";

export default function ListWaypoints({ waypoints, showDetail, locations }) {
  return (
    <View>
      <View style={styles.mapContainer}>
        <MapCtrl
          resourceType="waypoints"
          markers={locations}
          showDetail={showDetail}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
});
