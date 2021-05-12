import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LandingCtrl from "../../controllers/landing/LandingCtrl";

export default function Home({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      <LandingCtrl navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
