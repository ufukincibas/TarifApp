import React, { useEffect, useState } from "react";
import { View, Text, FlatList , StyleSheet} from "react-native";
import axios from "axios";
import MealsCard from "../Components/Meals/Card"; // MealsCard componentini import edin


function MealsPage({ route, navigation }) {
  const { category } = route.params; // Kategori bilgisi buradan gelecek
  const [meals, setMeals] = useState([]);

  // Seçilen kategoriye göre yemekleri API'den çekme
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => console.log(error));
  }, [category]);

  // FlatList'te gösterilecek her bir yemek kartı
  const renderMeal = ({ item }) => (
    <MealsCard
      meal={item}
      onSelect={() => navigation.navigate("MealDetailPage", { mealId: item.idMeal })} // Yemeğin detay sayfasına yönlendirme
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meals in {category}</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderMeal}
      />
    </View>
  );
}

const styles =StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      backgroundColor: '#f8f8f8',
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },
    bodyContainer: {
      flex: 1,
      marginLeft: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default MealsPage;
