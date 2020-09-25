import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Config from "react-native-config";

const Home = () => {
    return(
        <View style = {{flex:1,justifyContent:"center",alignContent:'center',alignItems:'center'}}>
            <Text>Sample</Text>
            <Text>{Config.API_URL}</Text>
        </View>
    )
}

export default Home;