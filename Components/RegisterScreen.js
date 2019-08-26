import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, TextInput,ToastAndroid,} from 'react-native';
import {withNavigation} from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            phonenumber:'',
            address:''
        }
    }
    myfunction=() => {
        const {username, email,password, phonenumber,address} = this.state;
        if(username==""){
            // alert('Please fill the username');
            ToastAndroid.show('one of the fields are empty or not set properly', ToastAndroid.LONG);
        }
        else if(email==""){
            // alert('please fill the email');
            ToastAndroid.show('one of the fields are empty or not set properly', ToastAndroid.LONG)
        } 
        else if(password==""){
            ToastAndroid.show('one of the fields are empty or not set properly', ToastAndroid.LONG)
        }
        else if(phonenumber==""){
            ToastAndroid.show('one of the fields are empty or not set properly', ToastAndroid.LONG)
        }
        else if(address==""){
            ToastAndroid.show('one of the fields are empty or not set properly', ToastAndroid.LONG)
        }
        else{
            // alert('Thankyou, you are successfully Registered')
            ToastAndroid.show('Thankyou, you are successfully Registered', ToastAndroid.LONG)
        }
    }
    render(){
        return(
            
            <ScrollView style={{backgroundColor:'black'}}>
                 <View style={{ marginTop:60, marginBottom:30}}>
                     <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: '500' }}>Get on Board</Text>
                 </View>
                 <View style={{marginLeft:8, marginRight:8, marginBottom:20}}>
                <View style={{marginBottom:15}}>
                    <Input
                        placeholder='username'
                        placeholderTextColor='white'
                        inputStyle={{color:'white'}}
                        onChangeText={username => this.setState({username})}
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
                <View style={{marginBottom:15}}>
                    <Input
                        placeholder='Phone number'
                        placeholderTextColor='white'
                        inputStyle={{color:'white'}}
                        onChangeText={phonenumber => this.setState({phonenumber})}
                        leftIcon={
                            <Icon
                                style={{marginRight:10}}
                                name='phone'
                                size={24}
                                color='white'
                            />
                        }
                    />
                </View>
                <View>
                    <Input
                        placeholder='address'
                        placeholderTextColor='white'
                        inputStyle={{color:'white'}}
                        onChangeText={address => this.setState({address})}
                        leftIcon={
                            <Icon
                                style={{marginRight:10}}
                                name='address-book'
                                size={24}
                                color='white'
                            />
                        }
                    />
                </View>
                </View>
                <TouchableOpacity onPress={this.myfunction} style={{alignSelf:'center', height:50, marginTop:30,marginBottom:80, width:120, borderRadius:20,borderWidth:2, borderColor:'white'}}>
                    <Text style={{color:'white', textAlign:'center',fontSize:16,fontWeight:"500", marginTop:12}}>Signup</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', alignSelf:'center', marginBottom:55}}>
                        <Text style={{color:'white'}}>I am already a member!</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <Text style={{color:'red', fontWeight:"500"}}>SignIn</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
            
        )
    }
}
export default withNavigation(RegisterScreen);