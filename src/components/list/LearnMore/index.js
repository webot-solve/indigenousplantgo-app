import React from "react";
import { 
  View, 
  StyleSheet, 
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchItemCtrl from "../../../controllers/search/item/SearchItemCtrl";

export default function ListLearnMore({learnMores, showDetail}){
  return (
    <View>
    <FlatList
      contentContainerStyle={styles.list}
      keyExtractor={(learnMore) => learnMore._id}
      data={learnMores}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              showDetail(item._id);
              console.log("button pressed AJP")
            }}
          >
            <SearchItemCtrl resource={item} resourceType={"learnMores"} />
          </TouchableOpacity>
        );
     }}
    />
    
  </View>
  );
}



const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
  },
});