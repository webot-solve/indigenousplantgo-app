import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TourDetailCtrl from "../../controllers/detail/Tour/TourDetailCtrl"


export default function DetailTour({ route, navigation }) {
  let tour = {};

  if (route && route.params && Object.keys(route.params).length > 2)
    tour = route.params;

  return (
    <View>
      <TourDetailCtrl tour={tour}/>
    </View>
  );
}

const styles = StyleSheet.create({});
