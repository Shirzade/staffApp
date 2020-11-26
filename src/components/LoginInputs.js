import React, { Component } from 'react'
import { View, Text,ListView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import inputText from '../style/inputText'; 
import buttons from '../style/buttons'; 
import { connect } from 'react-redux';
import text from '../style/text'; 
import { StatusBar } from "react-native";
import { StackNavigator } from 'react-navigation';
import { login } from '../../redux/actions/auth';
import Spinner from 'react-native-spinkit';

class Inputs extends Component {
    constructor(props) {
       super(props);
       this.state={
           email:'',
           password :'',
           loading : true,
           isLoggedIn:false
       }
    }
    handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text)=> {
        this.setState({ password: text })
     }
    userLogin (email, pass) {
        if(email == '')
          alert('نام كاربري ، كلمه عبور را وارد نماييد')
          else
        this.connectToServer();
    }
    connectToServer() {
        return fetch('https://www.hyperyek.com/web/session/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "call",
                "params": {
                "db":"hyper",
                "login":`${this.state.email}`,
                "password":`${this.state.password}`},
                "id": "382893928"
            }),
          })
        .then((response) => response.json())
        .then(responce=>{
            if(typeof(responce.result.uid) == 'boolean'){
                alert("نام كاربري يا رمز عبور اشتباه است ") 
                this.setState({isLoggedIn:false})
            }
            else{
                this.setState({isLoggedIn:true})
            }     
        })
        .catch((error) => {
        console.error(error);
      });
      }
   render(){
   
      return (
         <View>
            <TextInput
               style={inputText.loginInput}
               underlineColorAndroid = "transparent"
               placeholder = "آدرس ایمیل"
               placeholderTextColor = "#928f98"
               autoCapitalize = "none"
               keyboardType='email-address'
               onChangeText = {this.handleEmail}/>
            <TextInput
               style={inputText.loginInput}
               underlineColorAndroid = "transparent"
               placeholder = "رمز عبور"
               placeholderTextColor = "#928f98"
               autoCapitalize = "none"
               secureTextEntry={false}
               onChangeText = {this.handlePassword}/>
            <TouchableOpacity
                  onPress = {
                  ()=> this.userLogin(this.state.email, this.state.password)}>
               <Text style={[buttons.buttonPrimary,text.subTitle]}>ورود</Text>
            </TouchableOpacity>
         </View>
      )
   }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => { dispatch(login(username, password)); },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inputs);