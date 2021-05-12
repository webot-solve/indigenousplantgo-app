import React from "react";
import Landing from "../../components/landing";

export default function LandingCtrl({ navigation }) {
  const navigateToPlants = () => {
    navigation.navigate("List Plants");
  };

  const navigateToWaypoints = () => {
    navigation.navigate("List Waypoints");
  };

  return (
    <Landing
      navigateToPlants={navigateToPlants}
      navigateToWaypoints={navigateToWaypoints}
    />
  );
}
