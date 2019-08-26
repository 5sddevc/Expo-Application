import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation'
import LoginScreen from "../demoProject/Components/LoginScreen"
import RegisterScreen from '../demoProject/Components/RegisterScreen'
import HomeScreen from '../demoProject/Components/HomeScreen'
// import SignupScreenLogics from '../Containers/SignupScreen/SignupScreenLogics'   

const PrimaryNav = createStackNavigator({

    LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
        header: null
      })
},
RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
        header: null
      })
},
HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
        header: null
    })   
},
},

{
    // Default config for all screens
    //headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
        elevation: 0
      }
    }
  }

)
export default createAppContainer(PrimaryNav)


