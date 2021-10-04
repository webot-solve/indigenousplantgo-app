import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LearnMoreDetailCtrl from "../../controllers/detail/LearnMore/LearnMoreDetailCtrl"


export default function DetailTour({ route, navigation }) {
  let learnMore = {};

  if (route && route.params && Object.keys(route.params).length > 2)
    learnMore = route.params;

  return (
    <View>
      <Text>Hello from Screens: LearnMore</Text>
      <LearnMoreDetailCtrl
        learnMore={learnMore}
      />    
    </View>
  );
}

const styles = StyleSheet.create({});
