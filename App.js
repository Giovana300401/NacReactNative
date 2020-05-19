
import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import User from './components/user'
import UserList from './components/userList'

   
export default class App extends Component {

    render(){

      return( 
        <View style={styles.loader}> 
        <User/>
        <UserList/>   
        </View>
      )
    }

}
const styles = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   }
});