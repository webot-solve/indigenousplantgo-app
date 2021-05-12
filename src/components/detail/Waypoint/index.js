import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapCtrl from "../../../controllers/map/MapCtrl";
import { InfoActive } from "../../../icons/Info";
import WaypointBodyCtrl from "../../../controllers/detail/Waypoint/body/WaypointBodyCtrl";

export default function WaypointDetail({
  waypoint,
  locations,
  showDetail,
  showPlant,
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View style={styles.mapContainer}>
        <View style={styles.mapBanner}>
          <View style={styles.bannerContainer}>
            <View style={styles.bannerIcon}>
              <InfoActive />
            </View>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                color: "#333",
              }}
            >
              {locations.length} waypoints located on campus.
            </Text>
          </View>
        </View>
        <MapCtrl
          resourceType="waypoints"
          markers={locations}
          isDetail={true}
          showDetail={showDetail}
        />
      </View>
      <View style={styles.bodyWrap}>
        <View style={styles.bodyContainer}>
          <WaypointBodyCtrl waypoint={waypoint} showPlant={showPlant} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 230,
    position: "relative",
  },
  bodyWrap: {
    height: "100%",
    marginTop: -10,
    backgroundColor: "dodgerblue",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bodyContainer: {
    backgroundColor: "white",
    height: "100%",
    marginTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mapBanner: {
    position: "absolute",
    zIndex: 50000,
    width: "100%",
    top: 7,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  bannerContainer: {
    backgroundColor: "white",
    paddingVertical: 7,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "lightgray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.5,
    elevation: 3,
  },
  bannerIcon: {
    position: "absolute",
    top: "50%",
    left: 7,
  },
});
