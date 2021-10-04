import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListLearnMore from "../../../components/list/LearnMore";

export default function ListLearnMoreCtrl(){
  return(
    <View>
      <Text>Hello from Controller List LearnMore</Text>
      <ListLearnMore/>
    </View>
    

  );
}