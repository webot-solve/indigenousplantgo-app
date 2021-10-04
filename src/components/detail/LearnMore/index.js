import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Pressable
} from "react-native";

import LearnMoreHeadCtrl from "../../../controllers/detail/LearnMore/head/LearnMoreHeadCtrl";

export default function LearnMoreDetail({
  learnMore,
  topics
}){

  return(
    <View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
      <LearnMoreHeadCtrl learnMore={learnMore} topics={topics}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 230,
    position: "relative",
  },
  bodyWrap: {
    height: "100%",
    marginTop: -10,
    backgroundColor: "dodgerblue",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bodyContainer: {
    backgroundColor: "white",
    height: "100%",
    marginTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mapBanner: {
    position: "absolute",
    zIndex: 50000,
    width: "100%",
    top: 7,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  bannerContainer: {
    backgroundColor: "white",
    paddingVertical: 7,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "lightgray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.5,
    elevation: 3,
  },
  bannerIcon: {
    position: "absolute",
    top: "50%",
    left: 7,
  },
  container: {
    paddingTop: 20,
    paddingBottom: 0,
  },
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
    paddingHorizontal: 15,
  },
  fieldBody: {
    lineHeight: 20,
    paddingHorizontal: 15,
  },
   list: {
    paddingBottom: 40,
  },
  fieldButton:{
    color: "white"
  }
});
