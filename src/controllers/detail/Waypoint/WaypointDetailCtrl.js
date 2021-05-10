import React, { useState, useEffect } from "react";
import WaypointDetail from "../../../components/detail/Waypoint";

export default function WaypointDetailCtrl({ waypoint, navigation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    navigation.setOptions({ headerTitle: waypoint.waypoint_name });

    console.log(waypoint);
  }, []);

  useEffect(() => {
    if (typeof waypoint === "object" && Object.keys(waypoint).length > 2) {
      delegateLocations();
    }
  }, [waypoint]);

  const delegateLocations = () => {
    let locations_ = waypoint.locations;

    locations_.map((location) => ({
      latitude: location.latitude,
      longitude: location.longitude,
      location_name: location.location_name,
    }));

    setLocations(locations_);
  };

  return <WaypointDetail waypoint={waypoint} locations={locations} />;
}
