import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, TextInput,} from 'react-native';
import {withNavigation} from 'react-navigation'

class HomeScreen extends Component {
   
    render(){
        return(
            <View style={{ flex:1, backgroundColor:'black'}}>
               {/* <ScrollView> */}
                 <View>
                     <Text>abc</Text>
                 </View>
               {/* </ScrollView> */}
            </View>
        )
    }
}
export default withNavigation(HomeScreen);