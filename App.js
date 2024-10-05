import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import Flatcards from "./components/Flatcards";
import Elevatedcards from "./components/Elevatedcards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <Elevatedcards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
