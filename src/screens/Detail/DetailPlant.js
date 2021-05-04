import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlantDetailCtrl from "../../controllers/detail/Plant/PlantDetailCtrl";

export default function DetailPlant({ route, navigation }) {
  let plant = {};

  if (route && route.params && Object.keys(route.params).length > 2)
    plant = route.params;

  return (
    <View>
      <PlantDetailCtrl plant={plant} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
