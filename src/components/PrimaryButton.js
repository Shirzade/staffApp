import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import inputText from '../style/inputText'; 

class PrimaryButton extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) =>{
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render(){
      return (
         <View >
            <TextInput style={inputText.loginInput}
               underlineColorAndroid = "transparent"
               placeholder = "آدرس ایمیل"
               placeholderTextColor = "#928f98"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput
                style={inputText.loginInput}
                underlineColorAndroid = "transparent"
                placeholder = "رمز عبور"
                placeholderTextColor = "#928f98"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            <TouchableOpacity
               onPress = {
                  () => this.login(this.state.email, this.state.password)}>
               <Text style={}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs