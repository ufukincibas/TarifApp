import React from "react";
import { View, Text ,Button} from "react-native";

function Catogories({navigation}){

    function GotoMeals(){
        navigation.navigate("MealsPage")
    }
    return(
        <View>
            <Text>
                Catogories sayfası
            </Text>
            <Button title="gotoMeals" onPress={GotoMeals}/>
        </View>
    )
}

export default Catogories;