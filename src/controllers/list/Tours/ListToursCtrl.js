import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListTours from "../../../components/list/Tours"; 
import {getAllTours} from "../../../network"

export default function ListToursCtrl({navigation}){

  let isMounted = true;
  const [tours, setTours] = useState([]);

  useEffect(() => {
    isMounted = true;
    queryTours();

    return () => {
      isMounted = false;
    };
  }, []);

  const queryTours = async () => {
    if (!isMounted) return;
    const result = await getAllTours();
    if (result.error) return console.log("Error fetching tours");
    if (isMounted) setTours(result);
  };

  const showDetail = (id) => {
    if (!id) return;
    let foundTour = tours.filter((tour) => tour._id === id)[0];
    if (!foundTour) return;

    navigation.navigate("Tour Detail", foundTour);
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ListTours 
        tours={tours}
        showDetail={showDetail}
      />
    </View>
  )
}

const styles = StyleSheet.create({});