import React, { useRef, useEffect, useState } from "react";
import Map from "../../components/map";
import * as Location from "expo-location";

const BCIT_REGION = {
  latitude: 49.25,
  longitude: -123.0,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const LOCATION_SETTINGS = {
  accuracy: Location.Accuracy.Balanced,
  timeInterval: 200,
  distanceInterval: 0,
};

export default function MapCtrl({ markers, showDetail }) {
  const mapRef = useRef();
  const [initialRegion, setInitialRegion] = useState(BCIT_REGION);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [directive, setDirective] = useState("");

  useEffect(() => {
    if (markers && markers.length > 1) {
      if (mapRef.current) mapRef.current.fitToElements(true);
    }
  }, [markers]);

  useEffect(() => {
    (async () => {
      await requestLocation();
      await pollLocation(LOCATION_SETTINGS);
    })();
  }, []);

  const requestLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setDirective({
        error: true,
        message: "Permission to access location was denied",
      });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location);
  };

  const pollLocation = async (settings) => {
    Location.watchPositionAsync(settings, (location) => {
      setCurrentLocation(location);
    });
  };

  return (
    <Map
      region={initialRegion}
      markers={markers}
      mapRef={mapRef}
      showDetail={showDetail}
      currentLocation={currentLocation}
    />
  );
}
