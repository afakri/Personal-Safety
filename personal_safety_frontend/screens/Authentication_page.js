import { View, Text, StyleSheet ,TextInput, SafeAreaView, ScrollView, Button,TouchableHighlight} from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Main from "../components/Main";
import React, { Component, Fragment } from 'react';

function Authentication_page({ navigation }) {
  return (
    <Screen>
      <Text style={styles.Title} >Personal safety </Text>
      <SafeAreaView style ={styles.div}>
    <Text style={styles.baseText} >Email: </Text>
    <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="numeric"
      />
      <Text style={styles.baseText} >Password: </Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your password"
        keyboardType="numeric"
      />
      <TouchableHighlight
      style={styles.container}  onPress={() => {
        navigation.navigate("Home");
      }}
    >
      <Text style ={styles.butTxt}>Log in</Text>
    </TouchableHighlight>
    <Button
                title="Sign up"
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
      </SafeAreaView>
      </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    width: 200,
    marginTop:20,
    backgroundColor: '#D7FFFD',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius:5,
    alignItems: 'center',
    
  },
  item: {
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Cochin',
    fontSize: 20
  },
  baseText: {
      marginLeft: '10%',
    fontFamily: 'Cochin',
    fontSize: 20
  },
  butTxt:{
    fontFamily: 'Cochin',
    fontSize: 20
  },
  
  div:{
    marginTop:'25%',
    
  },
  Title: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  }
});



export default Authentication_page;