import react from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
export default function Elevatedcards() {
  return (
    <View>
      <Text style={styles.headingtext}>Elevatedcards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.card]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.card]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.card]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.card]}>
          <Text>more</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headingtext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: "black",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
  },
});
