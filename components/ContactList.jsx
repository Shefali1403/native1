import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
export default function ContactList() {
  const Contacts = [
    {
      uid: 1,
      name: "Saket",
      status: "Making your Gpay smooth",
      imageUrl:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
    },
    {
      uid: 2,
      name: "Raj",
      status: "Building secure digital banks",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    },
    {
      uid: 3,
      name: "Simran",
      status: "IOS Developer",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    },
    {
      uid: 4,
      name: "Anish",
      status: "Just an extraordinary teacher",
      imageUrl:
        "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
    },
    {
      uid: 5,
      name: "Rahul",
      status: "I love how to code and teach",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    },
  ];
  return (
    <View>
      <Text style={styles.headingtext}>Contact List</Text>
      <ScrollView style={styles.container}>
        {Contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.usercard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
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
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  usercard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "#CC8899",
    padding: 4,
    borderRadius: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 80 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
  },
  userStatus: {
    fontSize: 12,
  },
});
