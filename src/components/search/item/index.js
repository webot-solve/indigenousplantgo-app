import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function SearchItem({ resource, resourceType, topics }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrap}>
        <View>
          {resource.images && resource.images.length > 0 ? (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: resource.images[0].image_url }}
                style={styles.image}
              />
            </View>
          ) : null}
        </View>
        <View style={{ width: "90%" }}>
          <View style={{ marginBottom: 7 }}>
            <Text style={styles.heading}>
              {resourceType === "plants"
                ? resource.plant_name
                : resource.waypoint_name}
            </Text>
            <Text style={styles.subheading}>
              {resourceType === "plants" ? resource.scientific_name : null}
            </Text>
          </View>
          <View style={styles.topicContainer}>
            {topics.map((topic, index) => (
              <View style={styles.topic} key={index}>
                <Text>{topic}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  heading: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 21,
  },
  subheading: {
    color: "gray",
  },
  topicContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  topic: {
    backgroundColor: "#eee",
    marginRight: 5,
    marginBottom: 5,
    padding: 3,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 2,
  },
  imageContainer: {
    width: 75,
    height: 75,
    marginRight: 20,
  },
  image: {
    flex: 1,
    borderRadius: 75 / 2,
    overflow: "hidden",
  },
  itemWrap: {
    display: "flex",
    flexDirection: "row",
  },
});
