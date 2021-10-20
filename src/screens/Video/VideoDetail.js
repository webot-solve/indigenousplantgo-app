import React from "react";
import { StyleSheet, Text, View } from "react-native";
import YTPlayerCtrl from "../../controllers/ytplayer/YTPlayerCtrl";

export default function VideoDetail({route}) {
  let video = {};
  if (route && route.params && Object.keys(route.params).length > 2)
    video = route.params;  

    
  return (
    <View>
      <YTPlayerCtrl video={video}/>
    </View>
  );
}

const styles = StyleSheet.create({});
