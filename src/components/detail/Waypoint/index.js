import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WaypointDetail({ waypoint, locations }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View>
        <Text>{waypoint.waypoint_name}</Text>
        {locations && locations.length > 1
          ? locations.map((location, index) => (
              <Text key={index}>
                {location.location_name}: {location.latitude},{" "}
                {location.longitude}
              </Text>
            ))
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});