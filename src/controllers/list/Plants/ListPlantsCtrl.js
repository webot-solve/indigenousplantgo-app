import React, { useEffect, useState } from "react";
import ListPlants from "../../../components/list/Plants";
import { getAllPlants } from "../../../network";

export default function ListPlantsCtrl({ navigation }) {
  const [plants, setPlants] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    queryPlants();
  }, []);

  useEffect(() => {
    delegateLocations();
  }, [plants]);

  const delegateLocations = () => {
    if (!plants) return;
    if (plants && plants.length < 1) return;
    let locations_ = [];

    plants.forEach((plant) => {
      const plantName = plant.plant_name;
      const scientificName = plant.scientific_name;
      const plantLocations = plant.locations;
      const plantId = plant._id;

      plantLocations.forEach((location) => {
        const locationObj = {
          latitude: location.latitude,
          longitude: location.longitude,
          name: plantName,
          scientificName: scientificName,
          id: plantId,
          type: "plant",
        };

        locations_ = [...locations_, locationObj];
      });
    });

    setLocations(locations_);
  };

  const showDetail = (id) => {
    if (!id) return;
    let foundPlant = plants.filter((plant) => plant._id === id)[0];
    if (!foundPlant) return;

    navigation.navigate("Plant Detail", foundPlant);
  };

  const queryPlants = async () => {
    const result = await getAllPlants();
    if (result.error) return console.log("Error fetching plants");
    setPlants(result);
  };

  return (
    <ListPlants plants={plants} locations={locations} showDetail={showDetail} />
  );
}
