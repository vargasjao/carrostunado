import { View, Text, StyleSheet, FlatList, SectionList } from "react-native";
import React from "react";
import data from "../services/cars";
import convertData from "../helpers/convertData";

export default function List() {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.list}
        sections={convertData(data)}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.id}</Text>
            <Text style={styles.item}>{item.brand}</Text>
            <Text style={styles.item}>{item.model}</Text>
            <Text style={styles.item}>{item.year}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:32
  },
  sectionTitle: {
    backgroundColor:"#0CFF00",
    color: "black",
    marginBottom: 32,
    fontWeight: "bold",
    fontSize: 32,
    padding: 12,
    borderRadius:32,
    textAlign:"center"
  },
  itemContainer: {
    backgroundColor:"#0CFF00",
    marginVertical: 4,
    borderColor: "black",
    padding: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  list: {
    borderRadius: 16,
    marginBottom: 64,
    flexDirection: "column",
    
  },
  item: {
    padding: 4,
  },
});
