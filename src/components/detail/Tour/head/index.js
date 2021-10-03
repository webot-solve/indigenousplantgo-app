import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { PlantDefault } from "../../../../icons/Plant";

export default function TourHead({
  tour,
  topics,
  setImageLoaded,
  imageLoaded,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrap}>
        <View>
          {tour.images && tour.images.length > 0 ? (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: tour.images[0].image_url }}
                style={styles.image}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded ? (
                <View style={styles.imageOverlay}>
                  <PlantDefault />
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
              <PlantDefault />
            </View>
          )}
        </View>
        <View style={{ width: "80%" }}>
          <View style={{ marginBottom: 7 }}>
            <Text style={styles.heading}>{tour.tour_name}</Text>
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
    paddingHorizontal: 10,
    paddingBottom: 15,
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
    width: 100,
    height: 100,
    marginRight: 20,
    position: "relative",
  },
  placeholder: {
    backgroundColor: "lightgray",
    borderRadius: 100 / 2,
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
    borderRadius: 100 / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    borderRadius: 100 / 2,
    overflow: "hidden",
  },
  itemWrap: {
    display: "flex",
    flexDirection: "row",
  },
});
