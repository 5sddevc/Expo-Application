import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid, ScrollView, TouchableOpacity} from 'react-native';
import AppNavigation from '../demoProject/AppNavigation'
// import RegisterScreen from '../demoProject/Components/RegisterScreen'
// import LoginScreen from '../demoProject/Components/LoginScreen'
// import {createStackNavigator,createAppContainer,withNavigation} from 'react-navigation'

// import MapView from 'react-native-maps';

 export default class App extends React.Component{
render(){
  return(
      <View style={styles.container}>
        <AppNavigation></AppNavigation>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});