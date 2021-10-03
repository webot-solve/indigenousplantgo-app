import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import TourDetail from "../../../components/detail/Tour";


export default function TourDetailCtrl({ tour, navigation }) {
  let isMounted = true;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    concatInfo();
  }, [tour]);

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
 

  return (
    <View>
      <TourDetail 
        tour={tour}
        topics={topics}
      />
    </View>
  );
}

const styles = StyleSheet.create({});