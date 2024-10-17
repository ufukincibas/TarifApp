import React from "react";
import { View, Button } from "react-native";
import CatogorieCard from "../Components/Catagories/Card";

function Catogories({ navigation }) {
  function GotoMeals() {
    navigation.navigate("MealsPage");
  }

  return (
    <View style={{ flex: 1 }}>
      <CatogorieCard navigation={navigation} />
      <Button title="gotoMeals" onPress={GotoMeals} />
    </View>
  );
}

export default Catogories;
