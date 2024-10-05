import react from "react";
import { Text, View, StyleSheet, Image } from "react-native";
export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingtext}>Trending places</Text>
      <View style={[styles.card, styles.cardelevated]}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDD8CIjBDuVukV24jBDSDnW6-DUu3qrzpeQ&s",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city jaipur, India . Built from
            redd and pink sandstone, it is on the edge of the City Palace.
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 19,
  },
  cardelevated: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#758283",
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: "#000000",
  },
});
