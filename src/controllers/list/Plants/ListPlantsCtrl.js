import React, { useEffect, useState } from "react";
import ListPlants from "../../../components/list/Plants";
import { getAllPlants, CANCEL_TOKEN_SOURCE } from "../../../network";

export default function ListPlantsCtrl({ navigation }) {
  let isMounted = true;
  const [plants, setPlants] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    isMounted = true;
    queryPlants();

    return () => {
      isMounted = false;
      if (CANCEL_TOKEN_SOURCE && CANCEL_TOKEN_SOURCE.cancel)
        CANCEL_TOKEN_SOURCE.cancel();
    };
  }, []);

  useEffect(() => {
    delegateLocations();
  }, [plants]);

  function delegateLocations() {
    if (!isMounted) return;
    if (!plants) return;
    if (plants && plants.length < 1) return;
    let locations_ = [];

    for (let i = 0; i < plants.length; i++) {
      let plantName = plants[i].plant_name,
        scientificName = plants[i].scientific_name,
        plantLocations = plants[i].locations,
        plantId = plants[i]._id;

      for (let i = 0; i < plantLocations.length; i++) {
        const locationObj = {
          latitude: plantLocations[i].latitude,
          longitude: plantLocations[i].longitude,
          name: plantName,
          scientificName: scientificName,
          id: plantId,
          type: "plant",
        };

        locations_ = [...locations_, locationObj];
      }
    }

    if (isMounted) setLocations(locations_);
  }

  const showDetail = (id) => {
    if (!id) return;
    let foundPlant = plants.filter((plant) => plant._id === id)[0];
    if (!foundPlant) return;

    navigation.navigate("Plant Detail", foundPlant);
  };

  const queryPlants = async () => {
    if (!isMounted) return;
    const result = await getAllPlants();
    if (result.error) return console.log("Error fetching plants");
    if (isMounted) setPlants(result);
  };

  return (
    <ListPlants plants={plants} locations={locations} showDetail={showDetail} />
  );
}
