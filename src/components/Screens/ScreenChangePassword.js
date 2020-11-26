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
import {showModalErrorLogin, getSessionId} from '../../redux/actions';
import {valueString} from '../../utils/valueString';
import {colors} from '../../utils/colors';
import ModalErrorLogin from '../../components/elements/modals/ModalErrorLogin';
import {connect} from 'react-redux';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      verifyCode: '',
      newPassword: '',
      status: null,
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
    this.setState({newPassword: text});
  };

  handlePassword = text => {
    this.setState({newPasswordConfirmation: text});
  };

  changePassword(newPassword, newPasswordConfirmation) {
    this.setState({
      loading: true,
    });
    if (newPassword === '') {
      if (Platform.OS === 'ios') {
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
      AsyncStorage.getItem('@emailUser:emailUser', (err, data) => {
        if (err) {
          console.error('Error Loading');
        } else {
          let emailUser = JSON.parse(data);
          this.sendInfoToServer(
            emailUser,
            newPassword,
            newPasswordConfirmation,
          );
        }
      });
    }
  }

  async sendInfoToServer(email, newPassword, newPasswordConfirmation) {
    console.log('email', email);
    console.log('nw', newPassword);
    console.log('verify', this.props.verifyCode);

    try {
      let response = await fetch(
        `${configuration.MAIN_URL}` + `${restApi.API_CHANGE_PASSWORD}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            pass_forgot_code: this.props.verifyCode,
            password: newPassword,
            password_confirmation: newPasswordConfirmation,
          }),
        },
      );
      let result = await response.json();
      this.setState({
        loading: false,
      });
      if (result.status) {
        this.setState({
          status: true,
        });
        this.showMessage('', 'change your password successfuly');
      } else {
        this.setState({
          status: false,
        });
        this.showMessage('Error', result.errors.password[0]);
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
          onPress: () => this.manageClick(),
        },
      ],
      {cancelable: false},
    );
  }

  manageClick() {
    if (this.state.status) {
      Actions.jump('login');
    } else {
      console.log('preess');
    }
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
                    secureTextEntry={true}
                    onChangeText={this.handleEmail}
                    style={formStyles.inputText}
                    placeholderTextColor={colors.COLOR_PLACEHOLDER_TEXT}
                    placeholder={
                      valueString.VALUE_LOGIN_PAGE_PLACEHOLDER_NEW_PASSWORD
                    }
                  />
                </Item>
                <Item style={formStyles.item} rounded error>
                  <Icon style={formStyles.icon} active name="md-key" />
                  <TextInput
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                    style={formStyles.inputText}
                    placeholderTextColor={colors.COLOR_PLACEHOLDER_TEXT}
                    placeholder={
                      valueString.VALUE_LOGIN_PAGE_PLACEHOLDER_NEW_PASSWORD_AGAIN
                    }
                  />
                </Item>
                <Button
                  full
                  style={formStyles.button}
                  onPress={() => [
                    this.changePassword(
                      this.state.newPassword,
                      this.state.newPasswordConfirmation,
                    ),
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
          {valueString.VALUE_LOGIN_PAGE_CHANGE_PASSWORD}
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

const mapStateToProps = state => {
  return {
    verifyCode: state.getVerifyCode.verifyCode,
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(ChangePassword);
