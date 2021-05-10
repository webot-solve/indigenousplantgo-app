import React, { useRef, useEffect, useState } from "react";
import { MarkerUnits } from "react-native-svg";
import Map from "../../components/map";

const BCIT_REGION = {
  latitude: 49.25,
  longitude: -123.0,
  // latitudeDelta: 0.01,
  // longitudeDelta: 0.01,
};

export default function MapCtrl({ markers, showDetail }) {
  const mapRef = useRef();
  const [initialRegion, setInitialRegion] = useState(BCIT_REGION);

  console.log(markers);

  useEffect(() => {
    if (markers && markers.length > 1) {
      mapRef.current.fitToElements(true);
    }
  }, [markers]);

  return (
    <Map
      region={initialRegion}
      markers={markers}
      mapRef={mapRef}
      showDetail={showDetail}
    />
  );
}
