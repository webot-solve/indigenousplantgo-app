import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListTours from "../../../components/list/Tours"

export default function ListToursCtrl({navigation}){

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text>Hello from ListToursCtrl</Text>
      <ListTours/>
    </View>
  )
}

const styles = StyleSheet.create({});