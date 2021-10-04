import React from "react";
import { StyleSheet, Text, View } from "react-native";
import YTPlayerCtrl from "../../../../controllers/ytplayer/YTPlayerCtrl";

export default function Videos({ videos }) {
  return (
    <View style={styles.container}>
      {videos.map((video, index) => (
        <YTPlayerCtrl key={index} video={video} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
