import React, { useState, useEffect } from "react";
import PlantDetail from "../../../components/detail/Plant";

export default function PlantDetailCtrl({ plant, navigation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    console.log(JSON.stringify(locations));
  }, [locations]);

  useEffect(() => {
    navigation.setOptions({ headerTitle: plant.plant_name });
  }, []);

  useEffect(() => {
    if (typeof plant === "object" && Object.keys(plant).length > 2) {
      delegateLocations();
    }
  }, [plant]);

  const delegateLocations = () => {
    let locations_ = plant.locations;
    const plantId = plant._id;

    locations_ = locations_.map((location) => ({
      latitude: location.latitude,
      longitude: location.longitude,
      locationName: location.location_name,
      name: plant.plant_name,
      id: plantId,
      type: "plant",
    }));

    setLocations(locations_);
  };

  return <PlantDetail plant={plant} locations={locations} />;
}
