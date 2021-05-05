import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import MapCtrl from "../../../controllers/map/MapCtrl";

export default function ListPlants({ plants, showDetail, locations }) {
  return (
    <View>
      <View style={styles.mapContainer}>
        <MapCtrl markers={locations} showDetail={showDetail} />
      </View>
      <FlatList
        style={styles.flatList}
        keyExtractor={(plant) => plant._id}
        data={plants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                showDetail(item);
              }}
            >
              <Text>{item.plant_name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
});
