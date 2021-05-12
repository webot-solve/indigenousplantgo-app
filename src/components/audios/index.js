import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  PlayButton,
  ResetButton,
  PauseButton,
  FinishButton,
  Waves,
} from "../../icons/Playback";

export default function Audios({
  audio,
  soundState,
  handlePlayPause,
  stopSound,
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Waves />
        <Text
          style={{
            marginRight: 7,
            fontSize: 17,
            fontWeight: "bold",
            maxWidth: 200,
            marginLeft: 3,
          }}
        >
          {audio.caption}
        </Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.control} onPress={() => stopSound()}>
          <ResetButton />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.control}
          onPress={() => handlePlayPause()}
        >
          <View style={styles.mainControl}>
            {soundState.isPlaying ? (
              <View>
                <PauseButton />
              </View>
            ) : (
              <View style={{ transform: [{ translateX: 2 }] }}>
                <PlayButton />
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.control} onPress={() => stopSound()}>
          <FinishButton />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainControl: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#f7f7f7",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 5,
    padding: 7,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  albumCover: {
    width: 250,
    height: 250,
  },
  controls: {
    flexDirection: "row",
  },
  control: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
