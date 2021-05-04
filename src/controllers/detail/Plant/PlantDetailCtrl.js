import React, { useState, useEffect } from "react";
import PlantDetail from "../../../components/detail/Plant";

export default function PlantDetailCtrl({ plant, navigation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (typeof plant === "object" && Object.keys(plant).length > 2) {
      delegateLocations();
    }
  }, [plant]);

  const delegateLocations = () => {
    let locations_ = plant.locations;

    locations_.map((location) => ({
      latitude: location.latitude,
      longitude: location.longitude,
      location_name: location.location_name,
    }));

    setLocations(locations_);
  };

  return <PlantDetail plant={plant} locations={locations} />;
}
