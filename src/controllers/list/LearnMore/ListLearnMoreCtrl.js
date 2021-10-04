import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListLearnMore from "../../../components/list/LearnMore";
import { getAllLearnMore } from "../../../network";

export default function ListLearnMoreCtrl({navigation}){
  let isMounted = true;
  const [learnMores, setLearnMores] = useState([])

  useEffect(() => {
    isMounted = true;
    queryLearnMores();

    return () => {
      isMounted = false;
    };
  }, []);

  const queryLearnMores = async () => {
    if (!isMounted) return;
    const result = await getAllLearnMore();
    if (result.error) return console.log("Error fetching learn more");
    if (isMounted) setLearnMores(result);
  };

  const showDetail = (id) => {
    if (!id) return;
    let foundLearnMore = learnMores.filter((learnMore) => learnMore._id === id)[0];
    if (!foundLearnMore) return;

    navigation.navigate("LearnMore Detail", foundLearnMore);
  };

  return(
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ListLearnMore
        learnMores={learnMores}
        showDetail={showDetail}
      />
    </View>
    

  );
}