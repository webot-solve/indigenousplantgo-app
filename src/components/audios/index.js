import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Audios({ audio, playSound }) {
  return (
    <View style={styles.container}>
      <Text>Audios</Text>
      <TouchableOpacity onPress={playSound}>
        <Text>Play Sound</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
