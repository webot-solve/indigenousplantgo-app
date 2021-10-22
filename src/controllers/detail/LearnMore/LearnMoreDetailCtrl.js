import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LearnMoreDetail from "../../../components/detail/LearnMore"

export default function LearnMoreDetailCtrl({learnMore}){
  let isMounted = true;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    concatInfo();
  }, [learnMore]);

  useEffect(() => {
    isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  const concatInfo = () => {
    if (!isMounted) return;
    if (!learnMore) return;
    let concatArray = [];

    const categories = learnMore.categories.map(
      (category) => category.category_name
    );
    const tags = learnMore.tags.map((tag) => tag.tag_name);
    if (categories && categories.length > 0)
      concatArray = [...concatArray, ...categories];
    if (tags && tags.length > 0) concatArray = [...concatArray, ...tags];

    if (isMounted) setTopics(concatArray);
  };

  return(
    <View>
      <LearnMoreDetail
        learnMore={learnMore}
        topics={topics}
      />
    </View>
  );
}

const styles = StyleSheet.create({});