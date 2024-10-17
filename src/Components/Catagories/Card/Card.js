import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import styles from "./Card.styles";

function CatogorieCard({ navigation }) {
  const [categories, setCategories] = useState([]);

  // API'den kategorileri çekme
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => console.log(error));
  }, []);

  // FlatList'te gösterilecek her bir kart
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Meals", { category: item.strCategory })}
    >
      <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{item.strCategory}</Text>
        
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={renderItem}
      />
    </View>
  );
}

export default CatogorieCard;