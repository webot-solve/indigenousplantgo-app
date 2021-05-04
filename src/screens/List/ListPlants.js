import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListPlantsCtrl from "../../controllers/list/Plants/ListPlantsCtrl";

export default function ListPlants({ navigation }) {
  return (
    <View>
      <ListPlantsCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
