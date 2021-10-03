import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import TourDetail from "../../../components/detail/Tour";


export default function TourDetailCtrl({ tour, navigation }) {
  let isMounted = true;
  console.log("Hello",tour.tour_name)

  return (
    <View>
      <Text>Hello from TourDetailCtrl</Text>
      <TourDetail tour={tour}/>
    </View>
  );
}

const styles = StyleSheet.create({});