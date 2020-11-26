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
import {
  showModalErrorLogin,
  getSessionId,
  getVerifyCode,
} from '../../redux/actions';
import {valueString} from '../../utils/valueString';
import {colors} from '../../utils/colors';
import ModalErrorLogin from '../../components/elements/modals/ModalErrorLogin';
import {connect} from 'react-redux';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';

class SendVerifyCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      verifyCode: '',
      emailUser: '',
      password: '',
      rememberMeCheck: false,
      loading: false,
      isLoggedIn: false,
      session_id: '',
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('@emailUser:emailUser', (err, data) => {
      if (err) {
        console.error('Error Loading');
      } else {
        const emailUser = JSON.parse(data);
        this.setState({
          emailUser: emailUser,
        });
      }
    });
  }

  hideKeyboard() {
    Keyboard.dismiss();
  }

  handleEmail = text => {
    this.setState({verifyCode: text});
  };

  handlePassword = text => {
    this.setState({password: text});
  };

  sendVeriFyCodeToServer(verifyCode) {
    this.setState({
      loading: true,
    });
    if (verifyCode === '') {
      this.showMessage(
        valueString.VALUE_ERROR,
        valueString.VALUE_LOGIN_PAGE_ERROR_VERIFY,
      );
    } else {
      AsyncStorage.getItem('@emailUser:emailUser', (err, data) => {
        if (err) {
          console.error('Error Loading');
        } else {
          let emailUser = JSON.parse(data);
          this.sendInfoToServer(emailUser, verifyCode);
        }
      });
    }
  }

  async sendInfoToServer(email, verifyCode) {
    try {
      let response = await fetch(
        `${configuration.MAIN_URL}` + `${restApi.API_VERIFY_CODE}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            pass_forgot_code: verifyCode,
          }),
        },
      );
      let result = await response.json();
      if (result.status) {
        Actions.jump('changePassword');
        this.props.getVerifyCode(verifyCode);
      }
      this.setState({
        loading: false,
      });
      // console.log(result);
      // if (result.token_type == 'Bearer') {
      //   this.props.getSessionId(result.access_token);
      //   Actions.jump('barCodeReader');
      //   this.setInformation(information);
      // } else {
      //   this.props.showModalErrorLogin(true);
      // }
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
                  <Icon style={formStyles.icon} active type="FontAwesome" name="key" />
                  <TextInput
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                    style={formStyles.inputText}
                    placeholderTextColor={colors.COLOR_PLACEHOLDER_TEXT}
                    placeholder={
                      valueString.VALUE_LOGIN_PAGE_PLACEHOLDER_VERIFY_CODE
                    }
                  />
                </Item>
                <Button
                  full
                  style={formStyles.button}
                  onPress={() => [
                    this.sendVeriFyCodeToServer(this.state.verifyCode),
                    this.hideKeyboard(),
                  ]}>
                  {this.showBttonText()}
                </Button>
              </Form>
            </View>
            <View style={flexStyles.flexSmall} />
          </View>
        </View>
      </Container>
    );
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
  cansel() {
    this.setState({
      loading: false,
    });
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
    getVerifyCode: verifyCode => dispatch(getVerifyCode(verifyCode)),
    getSessionId: sessionId => dispatch(getSessionId(sessionId)),
    showModalErrorLogin: showModalLoginFlag =>
      dispatch(showModalErrorLogin(showModalLoginFlag)),
  };
};

export default connect(
  null,
  mapDisPatchToProps,
)(SendVerifyCode);
