import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import TourDetailCtrl from "../../controllers/detail/Tour/TourDetailCtrl"
import LearnMoreDetailCtrl from "../../controllers/detail/LearnMore/LearnMoreDetailCtrl"


export default function DetailTour({ route, navigation }) {
  let learnMore = {};

  if (route && route.params && Object.keys(route.params).length > 2)
    learnMore = route.params;

  return (
    <View>
      {/* <TourDetailCtrl 
        tour={tour}
        navigation={navigation}
      /> */}
      <Text>Hello from Screens: LearnMore</Text>
      <LearnMoreDetailCtrl
        learnMore={learnMore}
      />    
    </View>
  );
}

const styles = StyleSheet.create({});
