import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GalleryImageCtrl from "../../controllers/gallery/image/GalleryImageCtrl";

export default function Gallery({ images, resourceType }) {
  return (
    <View>
      <Text style={{ ...styles.fieldTitle, paddingHorizontal: 20 }}>
        Gallery
      </Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(image) => image._id}
        data={images}
        renderItem={({ item }) => {
          return <GalleryImageCtrl image={item} resourceType={resourceType} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
  },
});
