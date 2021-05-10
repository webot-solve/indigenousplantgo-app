import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { PlantMarker } from "../../icons/Plant";

export default function index({ region, markers, mapRef, showDetail }) {
  return (
    <View style={styles.container}>
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
                <PlantMarker />
                <Callout onPress={() => showDetail(marker.id)}>
                  <View style={{ minWidth: 80 }}>
                    <Text style={{ width: "100%", textAlign: "center" }}>
                      {marker.name}
                    </Text>
                    <Text>See Info</Text>
                  </View>
                </Callout>
              </Marker>
            ))
          : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
