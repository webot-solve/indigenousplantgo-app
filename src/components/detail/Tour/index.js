import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Pressable
} from "react-native";

import TourHeadCtrl from "../../../controllers/detail/Tour/head/TourHeadCtrl";
import TourDescriptions from "./descriptions";
import Gallery from "../../gallery";
import Videos from "../Tour/videos";
import AudiosCtrl from "../../../controllers/audios/AudiosCtrl";

export default function TourDetail({ 
  tour, 
  topics, 
  showDetailPlant,
  showDetailWaypoint, 
  showVideo

}) {

  console.log(tour.videos)
  return (
   <View>
     <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <TourHeadCtrl tour={tour} topics={topics} />
        <TourDescriptions  
          description={tour.description}
          fields={tour.custom_fields}
        />
        {tour && tour.images && tour.images.length > 1 ? (
          <Gallery images={tour.images} resourceType="waypoints" />
        ) : null}
        { tour.videos && tour.videos.length > 0 
          ? <>
              <Text style={styles.fieldTitle}>Videos</Text>
              {tour.videos.map((video,index) => (
                <Pressable 
                  key={index}
                  onPress={()=>{
                    showVideo(video._id);
                  }}
                >
                  <Text style={styles.fieldBody} key={index}>{video.caption}</Text>
                </Pressable>
              ))}
            </>
          : null
        }
        {tour && tour.audio_files && tour.audio_files.length > 0 ? (
          <>
            <Text style={styles.fieldTitle}>Audio Snippets</Text>
            {tour.audio_files.map((audio, index) => (
              <AudiosCtrl key={index} audio={audio} />
            ))}
          </>
        ) : null}
        { tour && tour.plants && tour.plants.length > 0 ? (
           <>
           <Text style={styles.fieldTitle}>Plants</Text>
           {tour.plants.map((plant,index) => (
             <Pressable 
              key={index}
              onPress={()=>{
                showDetailPlant(plant._id);
              }}
              >
                <Text style={styles.fieldBodyLink} >{plant.plant_name}</Text>
             </Pressable>
           
           ))}
         </>
        ): null}

        { tour && tour.waypoints && tour.waypoints.length  ? (
           <>
           <Text style={styles.fieldTitle}>Waypoints</Text>
           {tour.waypoints.map((waypoint,index) => (
             <Pressable 
              key={index}
              onPress={()=>{
                console.log("Text is pressed:", waypoint._id)
                showDetailWaypoint(waypoint._id);
              }}
              >
                <Text style={styles.fieldBodyLink} >{waypoint.waypoint_name}</Text>
             </Pressable>
           
           ))}
         </>
        ): null}
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
  fieldBodyLink: {
    lineHeight: 20,
    paddingHorizontal: 15,
    color: "blue"
  },
   list: {
    paddingBottom: 40,
  },
  fieldButton:{
    color: "white"
  }
});
