import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
export default function ActionCard() {
  const openWebsite = (websitelink) => {
    Linking.openURL(websitelink);
  };
  return (
    <View>
      <Text style={styles.headingtext}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedcard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 2024-ES12
          </Text>
        </View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmU9pydTADIh-l9EDogya_N6DwA9oppo7bA&s",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberofLines={3}>
            Today we are excited to share with you our latest course on web.dev.
            Learn JavaScript is a new course written by Mat Marquis, as a deep
            dive into modern JavaScript. It's a perfect companion to our
            existing courses, in particular the fundamentals covered in Learn
            HTML and Learn CSS.As with all the other courses on web.dev, you
            don't need to work through the course from beginning to end
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite("https://web.dev/blog/introducing-learn-javascript")
            }
          >
            <Text style={styles.socialLink}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    margin: 8,
    width: 370,
    height: 400,
  },
  elevatedcard: {
    elevation: 5,
  },
  headingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginTop: 10,
  },
  headerText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  cardImage: {
    height: 150,
    width: 300,
  },
  bodyContainer: {
    padding: 10,
  },
  footer: {
    padding: 8,
    flexDirection: "row",
  },
  socialLink: {
    fontSize: 16,
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "white",
    borderRadius: 7,
  },
});
