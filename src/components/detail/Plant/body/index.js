import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import PlantHeadCtrl from "../../../../controllers/detail/Plant/head/PlantHeadCtrl";
import PlantDescriptions from "../descriptions";
import Gallery from "../../../gallery";
import Videos from "../videos";
import AudiosCtrl from "../../../../controllers/audios/AudiosCtrl";

export default function PlantBody({ plant, topics }) {
  return (
    <View style={{ paddingBottom: 200 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <PlantHeadCtrl plant={plant} topics={topics} />
        <PlantDescriptions
          description={plant.description}
          fields={plant.custom_fields}
        />
        {plant && plant.images && plant.images.length > 1 ? (
          <Gallery images={plant.images} resourceType="plants" />
        ) : null}
        {plant && plant.videos && plant.videos.length > 0 ? (
          <Videos videos={plant.videos} />
        ) : null}
        {plant && plant.audio_files && plant.audio_files.length > 0 ? (
          <>
            <Text style={styles.fieldTitle}>Audio Snippets</Text>
            {plant.audio_files.map((audio, index) => (
              <AudiosCtrl key={index} audio={audio} />
            ))}
          </>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 0,
  },
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
    paddingHorizontal: 15,
  },
});
