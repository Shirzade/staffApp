import React from 'react';
import {
  Alert,
  AsyncStorage,
  Image,
  ImageBackground,
  Keyboard,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
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
import {showModalErrorLogin, getSessionId} from '../../redux/actions';
import {valueString} from '../../utils/valueString';
import {colors} from '../../utils/colors';
import ModalErrorLogin from '../../components/elements/modals/ModalErrorLogin';
import {connect} from 'react-redux';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';

class ForgetPassword extends React.Component {
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
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };

  sendCode(email) {
    this.setState({
      loading: true,
    });
    if (email === '') {
      this.showMessage(
        valueString.VALUE_ERROR,
        valueString.VALUE_LOGIN_PAGE_ERROR_EMAIL,
      );
    } else {
      this.sendInfoToServer(email);
    }
  }

  async sendInfoToServer(email) {
    try {
      let response = await fetch(
        `${configuration.MAIN_URL}` + `${restApi.API_SEND_CODE}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );
      let result = await response.json();
      if (result.error == null) {
        Actions.jump('sendVerifyCode');
        AsyncStorage.setItem('@emailUser:emailUser', JSON.stringify(email));
        console.log(result);
      }
      this.setState({
        loading: false,
      });
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
          onPress: () => this.cansel(),
        },
      ],
      {cancelable: false},
    );
  }
  cansel() {
    this.setState({
      loading: false,
    });
  }
  showLoading() {
    if (true) {
      return (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
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
                <Item style={formStyles.item} rounded error>
                  <Icon style={formStyles.icon} active type="FontAwesome" name="envelope" />
                  <TextInput
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                    style={formStyles.inputText}
                    placeholderTextColor={colors.COLOR_PLACEHOLDER_TEXT}
                    placeholder={valueString.VALUE_LOGIN_PAGE_PLACEHOLDER_EMAIL}
                  />
                </Item>
                <Button
                  full
                  style={formStyles.button}
                  onPress={() => [
                    this.sendCode(this.state.email),
                    this.hideKeyboard(),
                  ]}>
                  {this.showBttonText()}
                </Button>
              </Form>
            </View>
            <TouchableOpacity
              style="loginStyles.forgetPassword"
              onPress={() => this.goToLoginPage()}>
              <Text>Return to Login page </Text>
            </TouchableOpacity>
            <View style={flexStyles.flexSmall} />
          </View>
        </View>
      </Container>
    );
  }

  goToLoginPage(){
    Actions.jump('login');
  }

  showBttonText() {
    if (this.state.loading) {
      return <Spinner size="small" color="white" />;
    } else {
      return (
        <Text style={formStyles.textButton}>
          {valueString.VALUE_LOGIN_PAGE_SEND_CODE}
        </Text>
      );
    }
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
    showModalErrorLogin: showModalLoginFlag =>
      dispatch(showModalErrorLogin(showModalLoginFlag)),
  };
};

export default connect(
  null,
  mapDisPatchToProps,
)(ForgetPassword);
