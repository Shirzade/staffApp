import React from 'react';
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
  View,
  Alert,
} from 'react-native';
import {Container} from 'native-base';
import {internetOrderStyles, mainStyle} from '../../../assets/styles';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';
import MainHeader from '../elements/MainHeader';
import containers from '../../style/containers';
import text from '../../style/text';
import {connect} from 'react-redux';
import {valueString} from '../../utils/valueString';
import ItemInPersonSale from '../elements/items/ItemInPersonSale';
import { EventRegister } from 'react-native-event-listeners'
import {setAllowToReadScanner} from '../../redux/actions'

import OneSignal from 'react-native-onesignal';

class ReportOrders extends React.Component {
  constructor(props) {
    super(props);
    OneSignal.setLogLevel(6, 0);
  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
  OneSignal.init("0439651b-54f8-451b-93b1-00caa3551c3d", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
  OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened', this.onOpened);
   OneSignal.addEventListener('ids', this.onIds);
    this.state = {
      orders: [],
      isLoading: false,
      session_id: '',
    };
  }




  onReceived = (notification) => this._getOrders()

  UNSAFE_componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived);
    this.listener = EventRegister.addEventListener('myCustomEvent', (data) => this._getOrders())
    this.setState({isLoading: true});
    this._getOrders();
  }

  
  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener)
}





  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  _getOrders() {
    this.setState({
      orders: [],
      isLoading: true,
    });
    fetch(`${configuration.MAIN_URL}` + `${restApi.GET_ALL_REQUEST}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.props.sessionId,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        let requests = [];
        for (let i = 0; i < responseJson.data.length; i++) {
          for (let j = 0; j < responseJson.data[i].items.length; j++) {
            let item = responseJson.data[i];
            let sumItem = responseJson.data[i].items[j];
            let request = {
              requestId: sumItem.id,
              itemName: sumItem.item_title,
              data: item.created_at,
              from: item.entity_title,
              status: sumItem.status,
              priority: sumItem.priority.title,
            };
            requests.push(request);
          }
        }
        this.props.setAllowToReadScanner(true)
        this.setState({
          orders: requests,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  _renderLoading() {
    return (
      <ActivityIndicator
        style={{marginTop: 100}}
        size="large"
        animating={this.state.isLoading}
      />
    );
  }

  _showMessage() {
    if (this.state.showMassage) {
      return (
        <View style={mainStyle.messages}>
          <MessageMedium
            text={valueString.VALUE_INTERNET_PAGE_MESSAGE_NO_ORDER}
          />
        </View>
      );
    } else {
      return null;
    }
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  _showinfo(data) {
    console.log(data);
  }

  renderItems(order) {
    return <ItemInPersonSale order={order} />;
  }

  render() {
    return (
      <Container>
        <MainHeader
          showBach={true}
          subject="IN_PERSON_REPORT"
          title={valueString.VALUE_HOME_PAGE_IN_PERSON_REPORT}
        />
        <ScrollView>
          <View style={internetOrderStyles.titleList}>
            <Text style={internetOrderStyles.itemTitleListId}>Id</Text>
            <Text style={internetOrderStyles.itemTitleListId}>From</Text>
            <Text style={internetOrderStyles.itemTitleListId}>Service</Text>
            <Text style={internetOrderStyles.itemTitleListId}>Priority</Text>
            <Text style={internetOrderStyles.itemTitleListDAte}>Date</Text>
            <Text style={internetOrderStyles.itemTitleList}>Action</Text>
          </View>
          <View style={{marginRight: 5, marginLeft: 5}}>
            {this._showMessage()}
            <FlatList
              data={this.state.orders}
              renderItem={this.renderItems.bind(this)}
              keyExtractor={item => item.id}
            />
            {this._renderLoading()}
          </View>
        </ScrollView>
        <View
          style={{
            borderTopColor: '#555',
            borderTopWidth: 2,
            backgroundColor: '#c8c8c8',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => this._getOrders()}
            style={[containers.orangButtonAllR]}>
            <Text style={text.titleWhite}>{valueString.VALUE_UPDATING}</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
      setAllowToReadScanner:(flagAllow)=>dispatch(setAllowToReadScanner(flagAllow))
  }
}

const mapStateToProps = state => {
  return {
    sessionId: state.getSessionId.sessionId,
    attendanceFlag : state.managerAttendance.attendanceFlag
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(ReportOrders);
