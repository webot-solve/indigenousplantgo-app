import React, { useEffect, useState } from "react";
import ListWaypoints from "../../../components/list/Waypoints";
import { getAllWaypoints } from "../../../network";

export default function ListWaypointsCtrl({ navigation }) {
  const [waypoints, setWaypoints] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    queryWaypoints();
  }, []);

  useEffect(() => {
    delegateLocations();
  }, [waypoints]);

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
    console.log(id);
    if (!id) return;
    let foundWaypoint = waypoints.filter((waypoint) => waypoint._id === id)[0];
    console.log(foundWaypoint);
    if (!foundWaypoint) return;

    navigation.navigate("Waypoint Detail", foundWaypoint);
  };

  const queryWaypoints = async () => {
    const result = await getAllWaypoints();
    if (result.error) return console.log("Error fetching waypoints");
    setWaypoints(result);
  };
  return (
    <ListWaypoints
      waypoints={waypoints}
      locations={locations}
      showDetail={showDetail}
    />
  );
}
