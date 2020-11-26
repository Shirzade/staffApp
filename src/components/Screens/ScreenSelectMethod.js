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
import {showModalErrorLogin, getSessionId,showUsernameForm} from '../../redux/actions';
import {valueString} from '../../utils/valueString';
import {colors} from '../../utils/colors';
import ModalErrorLogin from '../../components/elements/modals/ModalErrorLogin';
import {connect} from 'react-redux';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';

class SelectMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMeCheck: false,
      loading: false,
      isLoggedIn: false,
      session_id: '',
    };
  }

  hideKeyboard() {
    Keyboard.dismiss();
  }

  handleEmail = text => {
    this.setState({email: this.parsePersianNumberToEnglish(text)});
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
      console.log(result);
      if (result.token_type == 'Bearer') {
        this.props.getSessionId(result.access_token);
        Actions.jump('barCodeReader');
        this.setInformation(information);
      } else {
        this.props.showModalErrorLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
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
          onPress: () => console.log('OK Pressed'),
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
              <Button
                  full
                  style={formStyles.button}
                  onPress={() => [
                    this.showQRScanner(),
                    this.hideKeyboard(),
                  ]}>
                  <Text style={formStyles.textButton}>
                      Login With QR
                  </Text>
                </Button>
                <Button
                  full
                  style={formStyles.button}
                  onPress={() => [
                    this.showLoginPage(),
                    this.hideKeyboard(),
                  ]}>
                 <Text style={formStyles.textButton}>
                    Login Without QR
                 </Text>
                </Button>
              </Form>
            </View>
            <View style={flexStyles.flexSmall} />
          </View>
        </View>
      </Container>
    );
  }


  showQRScanner(){
    Actions.jump('barCodeReaderLogin');
    this.props.showUsernameForm(false)
  }

  showLoginPage(){
    Actions.jump('login'); 
    this.props.showUsernameForm(true)
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
    showUsernameForm: showUsername => dispatch(showUsernameForm(showUsername)),
    showModalErrorLogin: showModalLoginFlag =>
      dispatch(showModalErrorLogin(showModalLoginFlag)),
  };
};

const mapStateToProps = state => {
  return {
    username: state.setUserName.username,
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(SelectMethod);
