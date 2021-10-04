import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { PlantDefault } from "../../../icons/Plant";
import { WaypointDefault } from "../../../icons/Waypoint";

export default function SearchItem({
  resource,
  resourceType,
  topics,
  setImageLoaded,
  imageLoaded,
}) {

  let resourceName;
  if(resourceType == "plants"){
    resourceName = resource.plant_name
  }
  if(resourceType == "waypoints"){
    resourceName = resource.waypoint_name
  }
  if(resourceType == "tours"){
    resourceName = resource.tour_name
  }
  if(resourceType == "learnMores"){
    resourceName = resource.learn_more_title
  }


  return (
    <View style={styles.container}>
      <View style={styles.itemWrap}>
        <View>
          {resource.images && resource.images.length > 0 ? (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: resource.images[0].image_url }}
                style={styles.image}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded ? (
                <View style={styles.imageOverlay}>
                  {resourceType === "plants" ? (
                    <PlantDefault />
                  ) : (
                    <WaypointDefault />
                  )}
                </View>
              ) : null}
            </View>
          ) : (
            <View
              style={{
                ...styles.imageContainer,
                ...styles.placeholder,
              }}
            >
              {resourceType === "plants" ? (
                <PlantDefault />
              ) : (
                <WaypointDefault />
              )}
            </View>
          )}
        </View>
        <View style={{ width: "80%" }}>
          <View style={{ marginBottom: 7 }}>
            <Text style={styles.heading}>
                {resourceName}
            </Text>
            {resourceType === "plants" ? (
              <Text style={styles.subheading}>{resource.scientific_name}</Text>
            ) : null}
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
    position: "relative",
  },
  placeholder: {
    backgroundColor: "lightgray",
    borderRadius: 75 / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 75 / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
