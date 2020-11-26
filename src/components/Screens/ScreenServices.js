import React from 'react';
import {
  Alert,
  Text,
  ActivityIndicator,
  Animated,
  FlatList,
  AsyncStorage,
  Easing,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {Container, Spinner} from 'native-base';
import {flexStyles, servicesPage} from '../../../assets/styles';
import {Actions} from 'react-native-router-flux';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';
import MainHeader from '../elements/MainHeader';
import {valueString} from '../../utils/valueString';
import {
  getProductBarCode,
  getSessionId,
  getSid,
  showModalErrorLogin,
} from '../../redux/actions';
import {connect} from 'react-redux';
import ItemService from '../elements/items/ItemService';

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <MainHeader
          showBach={true}
          subject="IN_PERSON_REPORT"
          title={valueString.VALUE_SERVICES_LIST}
        />
        <ScrollView>
          <View style={servicesPage.titleList}>
            <View style={servicesPage.itemTitleListId} />
            <View style={servicesPage.itemTitleListTitle}>
              <Text style={servicesPage.textStyle}>Title</Text>
            </View>
            <View style={servicesPage.itemTitleListTitle}>
              <Text style={servicesPage.textStyle}>Price</Text>
            </View>
            <View style={servicesPage.itemTitleListTitle}>
              <Text style={servicesPage.textStyle}>Priority</Text>
            </View>
            <View style={servicesPage.itemTitleListTitle}>
              <Text style={servicesPage.textStyle}>Active</Text>
            </View>
            <View style={servicesPage.itemTitleListTitle} />
          </View>
          <FlatList
            data={this.props.items}
            renderItem={this.renderItems.bind(this)}
            keyExtractor={item => item.id}
          />
          {this.renderLoading()}
        </ScrollView>
      </Container>
    );
  }

  renderItems(service) {
    return <ItemService service={service} />;
  }

  renderLoading() {
    return (
      <ActivityIndicator
        style={{marginTop: 100}}
        size="large"
        animating={this.props.showLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    sessionId: state.getSessionId.sessionId,
    items: state.services.items,
    showLoading: state.managerLoading.showLoading,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Services);
