import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { PlantMarker } from "../../icons/Plant";
import { WaypointMarker } from "../../icons/Waypoint";
import { InfoActive } from "../../icons/Info";
import { NavigatorDefault } from "../../icons/Navigator";

export default function index({
  region,
  markers,
  mapRef,
  showDetail,
  currentLocation,
  navigateRegionToUser,
  resourceType,
}) {
  const renderCallOut = (marker) => {
    switch (resourceType) {
      case "plants":
        return (
          <>
            <PlantMarker />
            <Callout
              style={styles.callout}
              onPress={() => showDetail(marker.id)}
            >
              <View style={{ minWidth: 80 }}>
                <Text style={styles.calloutHead}>{marker.name}</Text>
                <Text style={styles.calloutSubHead}>
                  {marker.scientificName}
                </Text>
                <View style={styles.infoContainer}>
                  <InfoActive />
                  <Text style={styles.calloutCTA}>View Plant</Text>
                </View>
              </View>
            </Callout>
          </>
        );
      case "waypoints":
        return (
          <>
            <WaypointMarker />
            <Callout
              style={styles.callout}
              onPress={() => showDetail(marker.id)}
            >
              <View style={{ minWidth: 80 }}>
                <Text style={{ ...styles.calloutHead, marginBottom: 7 }}>
                  {marker.name}
                </Text>
                <View style={styles.infoContainer}>
                  <InfoActive />
                  <Text style={styles.calloutCTA}>View Waypoint</Text>
                </View>
              </View>
            </Callout>
          </>
        );
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      {markers &&
      typeof region === "object" &&
      Object.keys(region).length > 1 ? (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            ...region,
          }}
        >
          {markers && markers.length > 1
            ? markers.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                >
                  {renderCallOut(marker)}
                </Marker>
              ))
            : null}
          {currentLocation &&
          typeof currentLocation === "object" &&
          Object.keys(currentLocation).length > 1 ? (
            <Marker
              coordinate={{
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
              }}
            >
              <View style={styles.markerShadow}>
                <View style={styles.marker}></View>
              </View>
            </Marker>
          ) : null}
        </MapView>
      ) : null}

      <View style={styles.locator}>
        <View style={styles.locatorShadow}>
          <TouchableOpacity
            style={styles.locatorButton}
            onPress={() => navigateRegionToUser()}
          >
            <NavigatorDefault
              style={{ transform: [{ translateX: -1 }, { translateY: 1 }] }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    height: 20,
    width: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 20 / 2,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
  },
  locator: {
    height: 50,
    width: 50,
    position: "absolute",
    bottom: 75,
    right: 20,
  },
  callout: {
    flex: 1,
    position: "relative",
    padding: 10,
    maxWidth: 175,
  },
  calloutHead: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    color: "#333",
  },
  calloutSubHead: {
    paddingTop: 3,
    paddingBottom: 3,
    textAlign: "center",
    fontStyle: "italic",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  calloutCTA: {
    textAlign: "center",
    color: "#0862F9",
    marginLeft: 3,
  },
  locatorShadow: {
    height: 50,
    width: 50,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.5,
    elevation: 3,
  },
  locatorButton: {
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  markerShadow: {
    height: 25,
    width: 25,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.5,
    elevation: 3,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
