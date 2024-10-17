import React from "react";
import { View, Text } from "react-native";

function Details(){
    return(
        <View style={{ flex: 1 }}>

      <MealCard navigation={navigation} />
      <Button title="gotoDetails" onPress={GotoDetails} />

        </View>

    )
}

export default Details;