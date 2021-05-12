import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { HandDefault } from "../../icons/Hand";
import { InfoAlternate } from "../../icons/Info";
import { PlantAlternate } from "../../icons/Plant";
import { WaypointAlternate } from "../../icons/Waypoint";
import { LocationAlternate } from "../../icons/Location";

const backgroundImage = require("./eagle__background.png");

export default function Landing({ navigateToWaypoints, navigateToPlants }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={backgroundImage}>
        <View style={styles.button}>
          <View style={styles.iconContainer}>
            <HandDefault />
          </View>
          <Text style={styles.heading}>Welcome</Text>
          <Text style={styles.subheading}>to Indigenous Plants Go</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={{ ...styles.heading, color: "#000" }}>Ey' Swayel!</Text>
          <Text style={styles.body}>“Hello” in Halq’emeylem</Text>

          <Text style={{ ...styles.bodyBold, marginTop: 20 }}>
            <InfoAlternate /> About Indigenous Plants Go
          </Text>
          <Text style={styles.body}>
            This information about the plants is provided for educational
            purposes only, plants should not be eaten or prepared based on this
            information.
          </Text>

          <Text style={{ ...styles.bodyBold, marginTop: 20 }}>
            Explore the Campus
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigateToPlants()}
          style={{ ...styles.button, marginBottom: 0 }}
        >
          <View style={styles.iconContainer}>
            <PlantAlternate />
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View Style={styles.pinContainer}>
              <LocationAlternate />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.heading2}>Explore Plants</Text>
              <Text style={styles.subheading2}>to Indigenous Plants Go</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateToWaypoints()}
          style={styles.button}
        >
          <View style={styles.iconContainer}>
            <WaypointAlternate />
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View Style={styles.pinContainer}>
              <LocationAlternate />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.heading2}>Explore Waypoint</Text>
              <Text style={styles.subheading2}>to Indigenous Plants Go</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 15,
    marginTop: 40,
  },
  container: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  button: {
    backgroundColor: "#B20C37",
    margin: 15,
    padding: 10,
    borderRadius: 5,
    borderColor: "#F24370",
    borderWidth: 3,
    position: "relative",
    overflow: "hidden",
  },
  heading: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  heading2: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  subheading: {
    color: "white",
    fontSize: 17,
  },
  subheading2: {
    color: "white",
    fontSize: 14,
  },
  body: {
    marginTop: 3,
    fontSize: 14,
    lineHeight: 21,
  },
  bodyBold: {
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute",
    right: 0,
    height: "100%",
    top: "0%",
    transform: [{ translateY: "-50%" }],
  },
});
