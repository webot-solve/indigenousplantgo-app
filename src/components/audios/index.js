import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Audios({ soundState, handlePlayPause, stopSound }) {
  return (
    <View style={styles.container}>
      <Text>Audios</Text>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.control} onPress={() => stopSound()}>
          <Text>Stahp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.control}
          onPress={() => handlePlayPause()}
        >
          {soundState.isPlaying ? (
            <Ionicons name="ios-pause" size={48} color="#444" />
          ) : (
            <Ionicons name="ios-play-circle" size={48} color="#444" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  albumCover: {
    width: 250,
    height: 250,
  },
  controls: {
    flexDirection: "row",
  },
  control: {
    margin: 20,
  },
});
