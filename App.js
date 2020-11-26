import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AsyncStorage, BackHandler, ToastAndroid} from 'react-native';
import DrawerLayout from './src/components/DrawerLayout';
import {Actions, Drawer, Router, Scene} from 'react-native-router-flux';
// components
import Splash from './src/components/Screens/ScreenSplash';
import Home from './src/components/Screens/ScreenHome';
import Login from './src/components/Screens/ScreenLogin';
import ForgetPassword from './src/components/Screens/ScreenForgetPassword';
import SendVerifyCode from './src/components/Screens/ScreenSendVerifyCode';
import ChangePassword from './src/components/Screens/ScreenChangePassword';
import IntiteisList from './src/components/Screens/ScreenIntiteiList';
import ReportOrders from './src/components/Screens/ScreenManegeRequests';
import DetailsNeedShop from './src/components/Screens/ScreenNeedShopDetails';
import BarCodeReader from './src/components/Screens/ScreenBarCodeReader';
import BarCodeReaderLogin from './src/components/Screens/ScreenBarCodeReaderLogin';
import Services from './src/components/Screens/ScreenServices';
import SelectMethod from './src/components/Screens/ScreenSelectMethod'
import DetailesEntity from './src/components/Screens/ScreenDetailesEntity';
import Beds from './src/components/Screens/ScreenBeds';
import store from './src/redux/store';
import {connect, Provider} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import OneSignal from 'react-native-onesignal';


EStyleSheet.build({
  $MainColor: '#232d37',
  $headerColor: '#232f3f',
  $backColor: '#edf2f5',
  $orangColor: '#3490dc',
  $borderColor: '#d9dde0',
  $mainFont: 'BYekan',
  $headerColorBotton: '#0f1a29',
  $availableColor: '#2bc95f',
  $notAvailableColor: 'red',
  $intityItemColor: '#4DC0B5',
});

var backButtonPressedOnceToExit = false;
export default class App extends React.Component {

  constructor(properties) {
    super(properties);
    OneSignal.setLogLevel(6, 0);
  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
  OneSignal.init("0439651b-54f8-451b-93b1-00caa3551c3d", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
  OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened', this.onOpened);
   OneSignal.addEventListener('ids', this.onIds);
}
//   componentWillUnmount() {
//     OneSignal.removeEventListener('received', this.onReceived);
//     OneSignal.removeEventListener('opened', this.onOpened);
//     OneSignal.removeEventListener('ids', this.onIds);
//   }

//   onReceived(notification) {
//     console.log("Notification received: ", notification);
//   }

//   onOpened(openResult) {
//     console.log('Message: ', openResult.notification.payload.body);
//     console.log('Data: ', openResult.notification.payload.additionalData);
//     console.log('isActive: ', openResult.notification.isAppInFocus);
//     console.log('openResult: ', openResult);
//   }

  
// }
// function myiOSPromptCallback(permission){
//     // do something with permission value
// }



  // getToken(){
  //   messaging()
  //     .getToken()
  //     .then(token => {
  //       console.log('tooooket',token);
  //     });
  // }


 
  


  componentWillMount() {
   
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress.bind(this),
    );
  }


  onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds(device) {
        console.log('Device info: ', device.userId);
        AsyncStorage.setItem('deviceId', device.userId);
      }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackPress.bind(this),
    );
  }

  onBackPress() {
    if (backButtonPressedOnceToExit) {
      BackHandler.exitApp();
    } else {
      if (Actions.currentScene !== '_listRequest') {
        if (Actions.currentScene == '_barCodeReader') {
          Actions.jump('login');
        }
        if (Actions.currentScene == '_detailesEntity') {
          Actions.jump('intiteisList');
        }
        if (Actions.currentScene == '_login') {
          BackHandler.exitApp();
        }
        if (Actions.currentScene == '_splash') {
          BackHandler.exitApp();
        }
        return true;
      } else {
        backButtonPressedOnceToExit = true;
        ToastAndroid.show(
          'Press the back button again to exit',
          ToastAndroid.SHORT,
        );
        //setting timeout is optional
        setTimeout(() => {
          backButtonPressedOnceToExit = false;
        }, 2000);
        return true;
      }
    }
  }

  render() {
    const RouterWithRedux = connect()(Router);
    return (
      <Provider store={store}>
        <RouterWithRedux backAndroidHandler={this.onBackPress}>
          <Scene hideNavBar>
            <Scene key="root" hideNavBar>
              <Drawer
                drawerPosition="left"
                contentComponent={DrawerLayout}
                key="drawer">
                <Scene
                  key="barCodeReader"
                  component={BarCodeReader}
                  hideNavBar
                />
                <Scene key="home" component={ReportOrders} hideNavBar />
                <Scene key="intiteisList" component={IntiteisList} hideNavBar back={true}/>
                <Scene key="listRequest" component={ReportOrders} hideNavBar back={true} />
                <Scene key="needShop" component={DetailsNeedShop} hideNavBar back={true}/>
                <Scene key="services" component={Services} hideNavBar />
                <Scene key="beds" component={Beds} hideNavBar />
                <Scene
                  key="detailesEntity"
                  component={DetailesEntity}
                  hideNavBar
                />
              </Drawer>
            </Scene>
            <Scene key="auth" hideNavBar>
              <Scene key="forgetPassword" component={ForgetPassword} back={true}/>
              <Scene key="changePassword" component={ChangePassword} back={true}/>
              <Scene key="sendVerifyCode" component={SendVerifyCode} back={true}/>
              <Scene key="selectMethod" component={SelectMethod}  back={true}/>
              <Scene key="barCodeReaderLogin" component={BarCodeReaderLogin} />
              <Scene key="login" component={Login} initial />
            </Scene>
            <Scene key="splash" component={Splash} initial />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
