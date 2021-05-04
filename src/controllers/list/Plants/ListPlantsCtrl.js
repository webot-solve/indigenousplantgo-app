import React, { useEffect, useState } from "react";
import ListPlants from "../../../components/list/Plants";
import { getAllPlants } from "../../../network";

export default function ListPlantsCtrl({ navigation }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    queryPlants();
  }, []);

  const showDetail = (plant) => {
    navigation.navigate("Plant Detail", plant);
  };

  const queryPlants = async () => {
    const result = await getAllPlants();
    if (result.error) return console.log("Error fetching plants");
    setPlants(result);
  };

  return <ListPlants plants={plants} showDetail={showDetail} />;
}
