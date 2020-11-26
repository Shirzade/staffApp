import React from 'react';
import {
  Alert,
  Text,
  Animated,
  AsyncStorage,
  Easing,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {Container, Spinner} from 'native-base';
import {flexStyles, splash} from '../../../assets/styles';
import {Actions} from 'react-native-router-flux';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';
import {
  getProductBarCode,
  getSessionId,
  getSid,
  showModalErrorLogin,
} from '../../redux/actions';
import {connect} from 'react-redux';
import { EventRegister } from 'react-native-event-listeners'

class Splash extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     userName: this.props.userName,
    //     password: this.props.password,
    //     rememberMeCheck: this.props.rememberMeCheck,
    //     deviceId: ''
    // }
  }

  componentWillMount() {
    AsyncStorage.getItem('@informationUser:informations', (err, data) => {
      if (err) {
        console.error('Error Loading');
      } else {
        const informations = JSON.parse(data);
        setTimeout(() => {
          console.log(informations);
          if (informations == null) {
            this.goToHomePage();
          } else {
            this.sendInfoToServer(informations.username, informations.password);
          }
        }, 4000);
      }
    });

    // this.props.getProductBarCode('', '')
    // setTimeout(() => {
    //     this.goToHomePage()
    // }, 4000)
  }

  async sendInfoToServer(userName, password) {
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
        this.checkAttendance();
      } else {
        this.props.showModalErrorLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  checkAttendance() {
    AsyncStorage.getItem('@attendanceFlag:attendanceFlag', (err, data) => {
      if (err) {
        console.error('Error Loading');
      } else {
        const attendanceFlag = JSON.parse(data);
        if (attendanceFlag == null) {
          Actions.jump('barCodeReader');
        } else {
          if (attendanceFlag) {
            Actions.jump('listRequest');
            EventRegister.emit('myCustomEvent', 'it works!!!')
           
          } else {
            Actions.jump('barCodeReader');
          }
        }
      }
    });
  }

  showMessage(title, message) {
    Alert.alert(
      title,
      message,
      [{text: 'تایید', onPress: () => Actions.reset('auth')}],
      {
        cancelable: false,
      },
    );
  }

  // save information
  setInformation(informations) {
    AsyncStorage.setItem(
      '@informationUser:informations',
      JSON.stringify(informations),
    );
  }

  // go to login page

  // go to home page
  goToHomePage() {
    Actions.jump('selectMethod');
  }

  render() {
    return (
      <Container style={splash.splashContainer}>
        <StatusBar hidden={true} />

        <View style={flexStyles.flexSmall}>
          <View style={flexStyles.flexSmall}>
            <Text style={splash.textTopPage}>Managment Requests</Text>
            {/* <Image style={splash.loadingImage} source={require('../../../public/img/ic_loading.png')}/> */}
          </View>
          <View style={flexStyles.flexSmall}>
            <Spinner color="#232d37" />
          </View>
        </View>
      </Container>
    );
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    getSessionId: sessionId => dispatch(getSessionId(sessionId)),
    getSid: sid => dispatch(getSid(sid)),
    showModalErrorLogin: showModalLoginFlag =>
      dispatch(showModalErrorLogin(showModalLoginFlag)),
    getProductBarCode: (barCode, sid) =>
      dispatch(getProductBarCode(barCode, sid)),
  };
};

export default connect(
  null,
  mapDisPatchToProps,
)(Splash);
