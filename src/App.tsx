import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Catogories from "./Pages/Catogories"
import Details from "./Pages/Details"
import Meals from "./Pages/Meals";

function App(){
 return(
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CatogoriesPage" component={Catogories}/>
        <Stack.Screen name="DetailsPage" component={Details}/>
        <Stack.Screen name="MealsPage" component={Meals}/>
      </Stack.Navigator>
  </NavigationContainer>
 )  
}

export default App;