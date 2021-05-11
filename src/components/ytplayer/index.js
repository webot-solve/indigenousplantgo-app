import React from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YTPlayer({ youtubeId, video }) {
  return (
    <View style={styles.playerContainer}>
      <Text style={{ ...styles.fieldTitle, marginTop: 0 }}>
        {video.caption} (Video)
      </Text>
      <YoutubePlayer
        height={210}
        style={{
          paddingBottom: 0,
          marginBottom: 0,
          alignSelf: "center",
          alignContent: "center",
          height: "100%",
        }}
        videoId={youtubeId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    marginTop: 20,
  },
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
  },
});
