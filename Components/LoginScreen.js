import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation'

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }
    }
    myfun=() => {
        const {email,password} = this.state;
        if(email==""){
            ToastAndroid.show('one of the fields are empty or not set properly',ToastAndroid.LONG)
        }
        else if (password==""){
            ToastAndroid.show('one of the fields are empty or not set properly', ToastAndroid.LONG)
        }
        else{
            ToastAndroid.show('Login successfully',  ToastAndroid.LONG)
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "black", }}>
                <View style={{ marginTop: 60 }}>
                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: '500' }}>Welcom To Expo</Text>
                    <Text style={{ marginTop: 20, fontSize: 20, color: 'white', textAlign: 'center', fontWeight: '300', marginBottom:80 }}>Please login to Continue</Text>
                </View>
                <View style={{marginLeft:6, marginRight:6}}>
                <View style={{marginBottom:15}}>
                    <Input
                        placeholder='email'
                        placeholderTextColor='white'
                        inputStyle={{color:'white'}}
                        onChangeText={email => this.setState({email})}
                        leftIcon={
                            <Icon
                                style={{marginRight:10}}
                                name='user'
                                size={24}
                                color='white'
                            />
                        }
                    />
                </View>
                <View style={{marginBottom:15}}>
                    <Input
                        placeholder='password'
                        placeholderTextColor='white'
                        inputStyle={{color:'white'}}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                        leftIcon={
                            <Icon
                                style={{marginRight:10}}
                                name='lock'
                                size={24}
                                color='white'
                            />
                        }
                    />
                </View>
                </View>
                <TouchableOpacity style={{marginTop:30, marginRight:8}}>
                   <Text style={{color:'white', fontSize:16, fontWeight:'100', textAlign:'right'}}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.myfun} style={{alignSelf:'center', height:50, marginTop:30,marginBottom:80, width:120, borderRadius:20,borderWidth:2, borderColor:'white'}}>
                    <Text style={{color:'white', textAlign:'center',fontSize:16,fontWeight:"500", marginTop:12}}>login</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                        <Text style={{color:'white'}}>Don't Have an account yet?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                            <Text style={{color:'red', fontWeight:"500"}}>Register</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default withNavigation(LoginScreen);