import React from "react";
import { 
  View, 
  StyleSheet, 
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchItemCtrl from "../../../controllers/search/item/SearchItemCtrl";


export default function ListTours({tours, showDetail}){
  return(
    <View>
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={(tour) => tour._id}
        data={tours}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                showDetail(item._id);
              }}
            >
              <SearchItemCtrl resource={item} resourceType={"tours"} />
            </TouchableOpacity>
          );
       }}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
  },
});
