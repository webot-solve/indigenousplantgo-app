import React, { useState, useEffect } from "react";
import PlantDetail from "../../../components/detail/Plant";

export default function PlantDetailCtrl({ plant, navigation }) {
  let isMounted = true;
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    isMounted = true;
    navigation.setOptions({ headerTitle: plant.plant_name });

    return () => {
      isMounted = false;
    };
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

    if (isMounted) setLocations(locations_);
  };

  return <PlantDetail plant={plant} locations={locations} />;
}
