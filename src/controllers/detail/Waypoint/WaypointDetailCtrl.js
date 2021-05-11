import React, { useState, useEffect } from "react";
import WaypointDetail from "../../../components/detail/Waypoint";
import { getAllWaypoints } from "../../../network";

export default function WaypointDetailCtrl({ waypoint, navigation }) {
  const [locations, setLocations] = useState([]);
  const [waypoints, setWaypoints] = useState([]);
  const [waypoint_, setWaypoint_] = useState({});

  useEffect(() => {
    setWaypoint_(waypoint);
    queryWaypoints();
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerTitle: waypoint_.waypoint_name });
  }, [waypoint_]);

  useEffect(() => {
    delegateLocations();
  }, [waypoints]);

  const queryWaypoints = async () => {
    const result = await getAllWaypoints();
    if (result.error) return console.log("Error fetching waypoints");
    setWaypoints(result);
  };

  const delegateLocations = () => {
    if (!waypoints) return;
    if (waypoints && waypoints.length < 1) return;
    let locations_ = [];

    waypoints.forEach((waypoint) => {
      const waypointName = waypoint.waypoint_name;
      const waypointLocations = waypoint.locations;
      const waypointId = waypoint._id;

      waypointLocations.forEach((location) => {
        const locationObj = {
          latitude: location.latitude,
          longitude: location.longitude,
          locationName: location.location_name,
          name: waypointName,
          id: waypointId,
          type: "waypoint",
        };

        locations_ = [...locations_, locationObj];
      });
    });

    setLocations(locations_);
  };

  const showDetail = (id) => {
    console.log("showDetail");
    console.log(id);
    if (!id) return;
    let foundWaypoint = waypoints.filter((waypoint) => waypoint._id === id)[0];
    console.log(foundWaypoint);
    if (!foundWaypoint) return;

    setWaypoint_(foundWaypoint);
  };

  return (
    <WaypointDetail
      waypoint={waypoint_}
      locations={locations}
      showDetail={showDetail}
    />
  );
}
