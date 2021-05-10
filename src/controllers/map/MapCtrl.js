import React, { useRef, useEffect, useState } from "react";
import Map from "../../components/map";
import * as Location from "expo-location";

const BCIT_REGION = {
  latitude: 49.25,
  longitude: -123.0,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const PLACEHOLDER_LOCATION = {
  coords: {
    accuracy: 65,
    altitude: 97.92,
    altitudeAccuracy: 10,
    heading: -1,
    latitude: 49.25,
    longitude: -123.0,
    speed: -1,
  },
  timestamp: 1620673664559,
};

const LOCATION_SETTINGS = {
  accuracy: Location.Accuracy.Balanced,
  timeInterval: 200,
  distanceInterval: 0,
};

export default function MapCtrl({ markers, showDetail, resourceType }) {
  const stage = "development";
  const mapRef = useRef();
  const [initialRegion, setInitialRegion] = useState(BCIT_REGION);
  const [region, setRegion] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [directive, setDirective] = useState("");

  useEffect(() => {
    delegateCurrentRegion();
  }, [currentLocation]);

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

  const delegateCurrentRegion = () => {
    if (
      currentLocation &&
      typeof currentLocation === "object" &&
      currentLocation !== null &&
      Object.keys(currentLocation).length > 1
    ) {
      let currentRegion_ = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      if (stage === "development") currentRegion_ = BCIT_REGION;

      setCurrentRegion(currentRegion_);
    }
  };

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
      if (stage === "development")
        return setCurrentLocation(PLACEHOLDER_LOCATION);
      setCurrentLocation(location);
    });
  };

  const navigateRegionToUser = () => {
    if (!currentLocation) return;
    if (mapRef.current) mapRef.current.animateToRegion(currentRegion, 1000);
  };

  return (
    <Map
      region={initialRegion}
      markers={markers}
      mapRef={mapRef}
      showDetail={showDetail}
      currentLocation={currentLocation}
      navigateRegionToUser={navigateRegionToUser}
      resourceType={resourceType}
    />
  );
}