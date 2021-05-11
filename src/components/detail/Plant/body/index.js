import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PlantHeadCtrl from "../../../../controllers/detail/Plant/head/PlantHeadCtrl";
import PlantDescriptions from "../descriptions";

export default function PlantBody({ plant, topics }) {
  return (
    <View style={{ paddingBottom: 220 }}>
      <ScrollView style={styles.container}>
        <PlantHeadCtrl plant={plant} topics={topics} />
        <PlantDescriptions
          description={plant.description}
          fields={plant.custom_fields}
        />
        <Text>PlantBody</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 100,
  },
});
