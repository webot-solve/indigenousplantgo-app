import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Pressable
} from "react-native";
import LearnMoreHeadCtrl from "../../../controllers/detail/LearnMore/head/LearnMoreHeadCtrl";
import LearnMoreDescriptions from "./descriptions";
import Gallery from "../../gallery";
import Videos from "../LearnMore/videos";
import AudiosCtrl from "../../../controllers/audios/AudiosCtrl";


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
      <LearnMoreDescriptions
        description={learnMore.description}
        fields={learnMore.custom_fields}
      />
      {learnMore && learnMore.images && learnMore.images.length > 1 ? (
        <Gallery images={learnMore.images} resourceType="waypoints" />
      ) : null}

      {learnMore && learnMore.videos && learnMore.videos.length > 0 ? (
        <Videos videos={learnMore.videos} />
      ) : null}

      {learnMore && learnMore.audio_files && learnMore.audio_files.length > 0 ? (
          <>
            <Text style={styles.fieldTitle}>Audio Snippets</Text>
            {learnMore.audio_files.map((audio, index) => (
              <AudiosCtrl key={index} audio={audio} />
            ))}
          </>
      ) : null}

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
