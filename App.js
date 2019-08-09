import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid, ScrollView, TouchableOpacity} from 'react-native';
// import MapView from 'react-native-maps';

export default function App() {
  
    var navigationView = (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        {/* <Text style={{margin: 10, fontSize: 15, textAlign: 'left', color:'#fff'}}>I'm in the Drawer!</Text> */}
        <Text style={{fontSize: 25, textAlign: 'left', color:'#fff', marginLeft:30, marginTop:50}}>.Home</Text>
        <Text style={{fontSize: 25, textAlign: 'left', color:'#fff', marginLeft:30, marginTop:20}}>.About</Text>
        
      </View>
    );
    return ( 
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'gray', fontWeight:25}}>
          <Text style={{margin: 10, fontSize: 25, textAlign: 'right', marginTop:40}}>Expo Application</Text>
          {/* <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text> */}
          <View style={{marginTop:50}}>
          <TouchableOpacity style={{backgroundColor:'#000', borderRadius:25, height:30, width:100}}>
            <Text style={{color:'#fff', textAlign:'center', marginTop:5}}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:50}}>
          <TouchableOpacity style={{backgroundColor:'#000', borderRadius:25, height:30, width:100}}>
            <Text style={{color:'#fff', textAlign:'center', marginTop:5}}>Sign up</Text>
          </TouchableOpacity>
        </View>
        </View>
      </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
