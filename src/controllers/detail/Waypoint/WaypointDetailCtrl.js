import React, { useState, useEffect } from "react";
import WaypointDetail from "../../../components/detail/Waypoint";
import { getAllWaypoints, getAllPlants } from "../../../network";

export default function WaypointDetailCtrl({ waypoint, navigation }) {
  let isMounted = true;
  const [locations, setLocations] = useState([]);
  const [waypoints, setWaypoints] = useState([]);
  const [waypoint_, setWaypoint_] = useState(waypoint);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    isMounted = true;
    queryWaypoints();
    queryPlants();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerTitle: waypoint_.waypoint_name });
  }, [waypoint_]);

  useEffect(() => {
    delegateLocations();
  }, [waypoints]);

  const queryWaypoints = async () => {
    if (!isMounted) return;
    const result = await getAllWaypoints();
    if (result.error) return console.log("Error fetching waypoints");
    if (isMounted) setWaypoints(result);
  };

  const queryPlants = async () => {
    if (!isMounted) return;
    const result = await getAllPlants();
    if (result.error) return console.log("Error fetching plants");
    if (isMounted) setPlants(result);
  };

  const delegateLocations = () => {
    if (!waypoints) return;
    if (waypoints && waypoints.length < 1) return;
    let locations_ = [];

    for (let i = 0; i < waypoints.length; i++) {
      let waypointName = waypoints[i].waypoint_name,
        waypointLocations = waypoints[i].locations,
        waypointId = waypoints[i]._id;

      if (waypointLocations && waypointLocations.length < 1) break;

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

    if (isMounted) setWaypoint_(foundWaypoint);
  };

  const showPlant = (id) => {
    if (!id) return;
    let foundPlant = plants.filter((plant) => plant._id === id)[0];
    if (!foundPlant) return;

    navigation.navigate("Plant Detail", foundPlant);
  };

  return (
    <WaypointDetail
      waypoint={waypoint_}
      locations={locations}
      showDetail={showDetail}
      showPlant={showPlant}
    />
  );
}
