import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Card.styles"; // Stil dosyanız

const MealsCard = ({ meal, onSelect }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onSelect}>
      
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{meal.strMeal}</Text>
         </View>
     
    </TouchableOpacity>
  );
};

export default MealsCard;
