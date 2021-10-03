import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TourDescriptions({ description, fields }) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.fieldTitle, marginTop: 0 }}>Description</Text>
      <Text style={styles.fieldBody}>{description}</Text>
      {fields && fields.length > 0
        ? fields.map((field, index) => (
            <View key={index}>
              <Text style={styles.fieldTitle}>{field.field_title}</Text>
              <Text style={styles.fieldBody}>{field.content}</Text>
            </View>
          ))
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
  },
  fieldBody: {
    lineHeight: 20,
  },
});
