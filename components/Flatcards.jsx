import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";
export default function Flatcards() {
  const [cardColors, setCardColors] = useState({
    redCard: "white",
    greenCard: "white",
    blueCard: "white",
  });
  const changeCardColor = (color) => {
    setCardColors({
      redCard: color === "red" ? "red" : "white",
      greenCard: color === "green" ? "green" : "white",
      blueCard: color === "blue" ? "blue" : "white",
    });
  };
  return (
    <View style={styles.flatcont}>
      <Text style={styles.headingtext}>Flatcards</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => changeCardColor("red")}>
          <View style={[styles.card, { backgroundColor: cardColors.redCard }]}>
            <Text>Red</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeCardColor("green")}>
          <View
            style={[styles.card, { backgroundColor: cardColors.greenCard }]}
          >
            <Text>Green</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeCardColor("blue")}>
          <View style={[styles.card, { backgroundColor: cardColors.blueCard }]}>
            <Text>Blue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  flatcont: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
  },
  headingtext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8,
  },
});
