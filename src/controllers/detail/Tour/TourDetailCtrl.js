import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import TourDetail from "../../../components/detail/Tour";


export default function TourDetailCtrl({ tour, navigation }) {
  let isMounted = true;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    concatInfo();
  }, [tour]);

  useEffect(() => {
    isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  const concatInfo = () => {
    if (!isMounted) return;
    if (!tour) return;
    let concatArray = [];

    const categories = tour.categories.map(
      (category) => category.category_name
    );
    const tags = tour.tags.map((tag) => tag.tag_name);

    if (categories && categories.length > 0)
      concatArray = [...concatArray, ...categories];
    if (tags && tags.length > 0) concatArray = [...concatArray, ...tags];

    if (isMounted) setTopics(concatArray);
  };
 
  const showDetailPlant = (id) => {
    if (!id) return;
    let foundPlant = tour.plants.filter( plant => plant._id === id)[0];
    if (!foundPlant) return;

    navigation.navigate("Plant Detail", foundPlant);
  };

  const showDetailWaypoint = (id) => {
    if (!id) return;
    let foundWaypoint = tour.waypoints.filter( waypoint => waypoint._id === id)[0];
    if (!foundWaypoint) return;

    navigation.navigate("Waypoint Detail", foundWaypoint);
  };

  const showVideo = (id) => {
    if (!id) return;
    let foundVideo = tour.videos.filter( video => video._id === id)[0];
    if (!foundVideo) return;

    navigation.navigate("Video Detail", foundVideo);
  };


  return (
    <View>
      <TourDetail 
        tour={tour}
        topics={topics}
        showDetailPlant ={showDetailPlant}
        showDetailWaypoint ={showDetailWaypoint}
        showVideo = {showVideo}
      />
    </View>
  );
}

const styles = StyleSheet.create({});