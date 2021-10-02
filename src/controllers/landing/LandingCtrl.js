import React from "react";
import Landing from "../../components/landing";

export default function LandingCtrl({ navigation }) {
  const navigateToPlants = () => {
    navigation.navigate("List Plants");
  };

  const navigateToWaypoints = () => {
    navigation.navigate("List Waypoints");
  };

  const navigateToTours = () => {
    navigation.navigate("List Tours");
  };

  return (
    <Landing
      navigateToPlants={navigateToPlants}
      navigateToWaypoints={navigateToWaypoints}
      navigateToTours={navigateToTours}
    />
  );
}
