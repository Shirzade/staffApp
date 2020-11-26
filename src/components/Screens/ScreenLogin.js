import React from 'react';
import {
  Alert,
  AsyncStorage,
  Image,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Platform,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button, Container, Form, Icon, Item, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {
  flexStyles,
  formStyles,
  loginStyles,
  splash,
} from '../../../assets/styles';
import {CheckBox} from 'react-native-elements';
import {showModalErrorLogin, getSessionId,setUserName,managerAttendance} from '../../redux/actions';
import {valueString} from '../../utils/valueString';
import {colors} from '../../utils/colors';
import ModalErrorLogin from '../../components/elements/modals/ModalErrorLogin';
import {connect} from 'react-redux';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';
import { EventRegister } from 'react-native-event-listeners'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMeCheck: false,
      loading: false,
      isLoggedIn: false,
      session_id: '',
      deviceToken : ''
    };
  }

 


  hideKeyboard() {
    Keyboard.dismiss();
  }

  handleEmail = text => {
    this.props.setUserName(this.parsePersianNumberToEnglish(text))
  };
  handlePassword = text => {
    this.setState({password: text});
  };

  userLogin(email, pass) {
    this.setState({
      loading: true,
    });
    if (email == '') {
      if (Platform.OS == 'ios') {
        this.showMessage(
          valueString.VALUE_ERROR,
          valueString.VALUE_LOGIN_PAGE_ERROR,
        );
      } else {
        this.setState({
          loading: false,
        });
        this.props.showModalErrorLogin(true);
      }
    } else {
      this.sendInfoToServer(email, pass);
    }
  }

  async sendInfoToServer(userName, password) {
    let information = {
      username: userName,
      password: password,
    };
    try {
      let response = await fetch(
        `${configuration.MAIN_URL}` + `${restApi.API_LOGIN}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'password',
            client_id: '2',
            client_secret: '6xWsAtyTp75CRTW20m24kjJXKC9tjLsfJDZEFnrH',
            username: userName,
            password: password,
            scope: '',
          }),
        },
      );
      let result = await response.json();
      this.setState({
        loading: false,
      });
      

      if (result.token_type == 'Bearer') {
        this.props.getSessionId(result.access_token);
        this.getTokenDevice()
        this.setInformation(information);
      } else {
        this.props.showModalErrorLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

//  get token device

  getTokenDevice(){
    AsyncStorage.getItem('deviceId').then((deviceId) => {
      if(deviceId){
        this.sendDeviceToken(deviceId)
      }
  });
  }


  // set device token to server
  async sendDeviceToken(deviceId) {
    let formData = new URLSearchParams();
    formData.append('token', deviceId);
    
    try {
      let response = await fetch(
        `${configuration.MAIN_URL}` + `${restApi.API_SET_DEVICE_TOKEN}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
			    	'content-Type':'application/x-www-form-urlencoded',
            Authorization: 'Bearer ' + this.props.sessionId,
          },
          body:formData.toString()
        },
      );
      let result = await response.json();
      if(result.status)
         this.atteendance()
    } catch (error) {
      console.log(error);
    }
  }

 // atendence 
  async atteendance() {
    if(this.props.uuid != '')
    {
      let formData = new FormData();
      formData.append("uuid",this.props.uuid);

      console.log('onjiiiiii',this.props.uuid);
      try {
          let response = await fetch(`${configuration.MAIN_URL}`+ `${restApi.API_ATTENDANCE}`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer '+this.props.sessionId
              },
              body: formData
          })
          let result = await response.json()  
          console.log('injaaaaaaaa',result);
           if (result.admin_id){
                  this.props.managerAttendance(true)
                  this.setAttendance(true)
               }  
               else
                  alert("error")
         
      } catch (error) {
          console.log(error)
      }
    } else {
      Actions.jump('listRequest');
    }
  
   
}

setAttendance(attendanceFlag) {
  AsyncStorage.setItem('@attendanceFlag:attendanceFlag', JSON.stringify(attendanceFlag))     
  Actions.jump('listRequest');
  EventRegister.emit('myCustomEvent', 'it works!!!')
}

  // save information
  setInformation(informations) {
    AsyncStorage.setItem(
      '@informationUser:informations',
      JSON.stringify(informations),
    );
  }

  deleteInformation() {
    AsyncStorage.setItem('@informationUser:informations', JSON.stringify(null));
  }

  showMessage(title, message) {
    Alert.alert(
      title,
      message,
      [
        {
          text: valueString.VALUE_CONFIRM,
          onPress: () =>  this.setState({
            loading: false,
          }),
        },
      ],
      {cancelable: false},
    );
  }

  showLoading() {
    if (true) {
      return (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(35, 45, 55, 0.44)',
            left: 0,
            right: 0,
            zIndex: 3,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Spinner size="large" color="#232d37" />
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Container>
        {this.showMessageModalAndroid()}
        <StatusBar backgroundColor="#232d37" barStyle="light-content" />
        <View
          style={splash.splashBackground}
          source={require('../../../public/img/ic_background.jpg')}>
          <View style={flexStyles.flexSmall}>
            <View style={flexStyles.flexSmall} />
            <View style={flexStyles.flexSmall}>
              <Form style={formStyles.form}>
                {this.showUserNameSection()}
                
                <Item style={formStyles.item} rounded error>
                  <Icon style={formStyles.icon} active type="FontAwesome" name="key" />
                  <TextInput
                    secureTextEntry={true}
                    placeholderTextColor={colors.COLOR_PLACEHOLDER_TEXT}
                    underlineColorAndroid="transparent"
                    onChangeText={this.handlePassword}
                    style={formStyles.inputText}
                    placeholder={
                      valueString.VALUE_LOGIN_PAGE_PLACEHOLDER_PASSWORD
                    }
                  />
                </Item>
                <Button
                  full
                  style={formStyles.button}
                  onPress={() => [
                    this.userLogin(this.props.username, this.state.password),
                    this.hideKeyboard(),
                  ]}>
                  {this.showBttonText()}
                </Button>
              </Form>
            </View>
            <TouchableOpacity
              style="loginStyles.forgetPassword"
              onPress={() => this.goToForgetPasswordPage()}>
              <Text>forget your password ?</Text>
            </TouchableOpacity>
            <View style={flexStyles.flexSmall} />
          </View>
        </View>
      </Container>
    );
  }


  showUserNameSection(){
    if(this.props.showUsername)
      return(
        <Item style={formStyles.item} rounded error>
                  <Icon style={formStyles.icon} active type="FontAwesome" name="phone" />
                  <TextInput
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={this.handleEmail}
                    style={formStyles.inputText}
                    placeholderTextColor={colors.COLOR_PLACEHOLDER_TEXT}
                    placeholder={
                      valueString.VALUE_LOGIN_PAGE_PLACEHOLDER_USERNAME
                    }
                  />
                </Item>
      )
      else 
      return null
  }

  showBttonText() {
    if (this.state.loading) {
      return <Spinner size="small" color="white" />;
    } else {
      return (
        <Text style={formStyles.textButton}>
          {valueString.VALUE_LOGIN_PAGE_LOGIN}
        </Text>
      );
    }
  }

  goToForgetPasswordPage() {
    Actions.jump('forgetPassword');
  }

  showMessageModalAndroid() {
    if (Platform.OS == 'ios') {
      return null;
    } else {
      return <ModalErrorLogin message={valueString.VALUE_LOGIN_PAGE_ERROR} />;
    }
  }

  toggleRememberMe(rememberMeCheck) {
    if (rememberMeCheck) {
      this.setFlagRememberMe(false);
      this.setState({
        rememberMeCheck: false,
      });
    } else {
      this.setFlagRememberMe(true);
      this.setState({
        rememberMeCheck: true,
      });
    }
  }

  // remember me
  setFlagRememberMe(rememberFlag) {
    AsyncStorage.setItem(
      '@rememberFlagUserNameAndPass:rememberFlag',
      JSON.stringify(rememberFlag),
    );
  }

  // convert Persian number to english
  parsePersianNumberToEnglish(numberInput) {
    var number = numberInput;
    number = number
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(d) {
        return d.charCodeAt(0) - 1632;
      })
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(d) {
        return d.charCodeAt(0) - 1776;
      });
    return number;
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    getSessionId: sessionId => dispatch(getSessionId(sessionId)),
    setUserName: username => dispatch(setUserName(username)),
    managerAttendance: (attendanceFlag) => dispatch(managerAttendance(attendanceFlag)),
    showModalErrorLogin: showModalLoginFlag =>
      dispatch(showModalErrorLogin(showModalLoginFlag)),
  };
};

const mapStateToProps = state => {
  return {
    username: state.setUserName.username,
    uuid: state.setUserName.uuid,
    showUsername: state.setUserName.showUsername,
    sessionId: state.getSessionId.sessionId
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(Login);
