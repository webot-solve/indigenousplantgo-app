import React, { useEffect, useState } from "react";
import ListWaypoints from "../../../components/list/Waypoints";
import { getAllWaypoints } from "../../../network";

export default function ListWaypointsCtrl({ navigation }) {
  let isMounted = true;
  const [waypoints, setWaypoints] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    isMounted = true;
    queryWaypoints();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    delegateLocations();
  }, [waypoints]);

  const delegateLocations = () => {
    if (!isMounted) return;
    if (!waypoints) return;
    if (waypoints && waypoints.length < 1) return;
    let locations_ = [];

    for (let i = 0; i < waypoints.length; i++) {
      let waypointName = waypoints[i].waypoint_name,
        waypointLocations = waypoints[i].locations,
        waypointId = waypoints[i]._id;

      for (let i = 0; i < waypointLocations.length; i++) {
        const locationObj = {
          latitude: waypointLocations[i].latitude,
          longitude: waypointLocations[i].longitude,
          name: waypointName,
          id: waypointId,
          type: "waypoint",
        };

        locations_ = [...locations_, locationObj];
      }
    }

    if (isMounted) setLocations(locations_);
  };

  const showDetail = (id) => {
    if (!id) return;
    let foundWaypoint = waypoints.filter((waypoint) => waypoint._id === id)[0];
    if (!foundWaypoint) return;

    navigation.navigate("Waypoint Detail", foundWaypoint);
  };

  const queryWaypoints = async () => {
    if (!isMounted) return;
    const result = await getAllWaypoints();
    if (result.error) return console.log("Error fetching waypoints");
    if (isMounted) setWaypoints(result);
  };
  return (
    <ListWaypoints
      waypoints={waypoints}
      locations={locations}
      showDetail={showDetail}
    />
  );
}
