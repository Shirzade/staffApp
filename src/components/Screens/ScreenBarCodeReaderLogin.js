import React from 'react';
import {
  Animated,
  AsyncStorage,
  Easing,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {Container} from 'native-base';
import {RNCamera} from 'react-native-camera';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import MainHeader from '../elements/MainHeader';
import {valueString} from '../../utils/valueString';
import {
  getProductBarCode,
  getTypeSearch,
  managerAttendance,
  setUserName,
  setUniqUserId
} from '../../redux/actions';
import {barCodeReaderStyle} from '../../../assets/styles';
import TextMediumWhite from '../../components/elements/texts/TextMediumWhite';
import {configuration} from '../../utils/config';
import base64 from 'react-native-base64';
import {restApi} from '../../utils/restApi';

class BarCodeReaderLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: '',
    };
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 120,
      easing: Easing.linear,
    }).start(() => this.animate());
  }

  onBarCodeRead(scanResult) {
    this.atteendance(scanResult.data);
  }

  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });

    return (
      <Container>
        <View style={{flex: 1}}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            ref={cam => (this.cam = cam)}
            onCameraReady={this.prepareRatio}
            flashMode={'on'}
            barcodeFinderBorderWidth={10}
            barcodeFinderWidth={350}
            barcodeFinderHeight={400}
            autoFocus={'on'}
            mirrorImage={false}
            barcodeFinderVisible={true}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            type={RNCamera.Constants.Type.back}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(52, 52, 52,0.7)',
                  width: '100%',
                  height: '20%',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: '40%',
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(52, 52, 52,0.7)',
                    width: '10%',
                    height: '100%',
                  }}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '80%',
                    height: '100%',
                  }}>
                  <Animated.View
                    style={{
                      opacity,
                      height: 2,
                      width: '100%',
                      backgroundColor: '#4ee31c',
                    }}
                  />
                  
                </View>
                <View
                  style={{
                    backgroundColor: 'rgba(52, 52, 52,0.7)',
                    width: '10%',
                    height: '100%',
                  }}
                />

              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(52, 52, 52,0.7)',
                  width: '100%',
                  height: '40%',
                }}
              >  
                <Text style={{color: 'white'}}>
                  Scan Your QR For Login to Application
                </Text>
                 <TouchableOpacity onPress={() => this.goToFirstPage()} style={{marginTop:20}}>
                 <Text style={{color: 'white',}}>
                    Return To First Page
                </Text>
                 </TouchableOpacity>
              </View>
            </View> 
          </RNCamera>
        </View>
      </Container>
    );
  }

  goToFirstPage(){
    Actions.jump('selectMethod');
  }

  // ----------------------------- atteendance admin ---------------------------
  atteendance(code) {
    let mainCode = base64.decode(code);
    let mainInformation = JSON.parse(mainCode); 
    this.props.setUniqUserId(mainInformation.id)
    this.props.setUserName(mainInformation.mobile)
    Actions.jump('login');

    // let formData = new FormData();
    // formData.append('uuid', mainInformation.id);

    // try {
    //   let response = await fetch(
    //     `${configuration.MAIN_URL}` + `${restApi.API_ATTENDANCE}`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         Authorization: 'Bearer ' + this.props.sessionId,
    //       },
    //       body: formData,
    //     },
    //   );
    //   let result = await response.json();
    //   console.log(result.admin_id);
    //   if (result.admin_id) {
    //     this.props.managerAttendance(true);
    //     this.setAttendance(true);
    //     Actions.jump('listRequest');
    //   } else alert('error');
    // } catch (error) {
    //   console.log(error);
    // }
  }

  setAttendance(attendanceFlag) {
    AsyncStorage.setItem(
      '@attendanceFlag:attendanceFlag',
      JSON.stringify(attendanceFlag),
    );
  }

  _goReturnPage(fromPage) {
    Actions.jump('home');
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    getProductBarCode: (
      active,
      title,
      description,
      authTypeName,
      payable,
      items,
    ) =>
      dispatch(
        getProductBarCode(
          active,
          title,
          description,
          authTypeName,
          payable,
          items,
        ),
      ),
    getTypeSearch: searchType => dispatch(getTypeSearch(searchType)),
    setUserName: username => dispatch(setUserName(username)),
    setUniqUserId: uuid => dispatch(setUniqUserId(uuid)),
    managerAttendance: attendanceFlag =>
      dispatch(managerAttendance(attendanceFlag)),
  };
};
const mapStateToProps = state => {
  return {
    sid: state.getBarCode.sid,
    page: state.getPlace.page,
    sessionId: state.getSessionId.sessionId,
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(BarCodeReaderLogin);
