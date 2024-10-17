import React from "react";
import { View, Text , Button} from "react-native";

function Meals({navigation}){

    function goToDetails() {
        {
            navigation.navigate("DetailsPage")
        
        }
    }
    return(
        <View>
            <Text>
                Meal sayfası
            </Text>
            <Button title="goToDetails" onPress={goToDetails}/>
        </View>
    )
}

export default Meals;