import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PlantHeadCtrl from "../../../../controllers/detail/Plant/head/PlantHeadCtrl";

export default function PlantBody({ plant, topics }) {
  return (
    <ScrollView style={styles.container}>
      <PlantHeadCtrl plant={plant} topics={topics} />
      <Text>PlantBody</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
