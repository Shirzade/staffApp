import React from 'react';
import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Item,
  Left,
  Picker,
  Right,
  Spinner,
  Title,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {
  internetOrderStyles,
  mainStyle,
  importProductStyles,
  entityPage,
} from '../../../assets/styles';
import containers from '../../style/containers';
import text from '../../style/text';
import MessageMedium from '../MessageMedium';
import {configuration} from '../../utils/config';
import {restApi} from '../../utils/restApi';
import {
  sendOrderDetails,
  getAllEntityList,
  setRefresh,
  managerLoading,
} from '../../redux/actions';
import MainHeader from '../elements/MainHeader';
import {valueString} from '../../utils/valueString';
import ItemEntity from '../elements/items/ItemEntity';
import {connect} from 'react-redux';
// import moment from 'jalali-moment'

class IntiteisList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      allListEntity: [],
      adminListEntity: [],
      showLoading: false,
      showMassage: false,
      selectedEntity: 0,
      state: 'confirm_cart',
      changeState: this.props.changeState,
      session_id: '',
      textColorNewOrder: '#232d37',
      textColororderConfirm: '#232d37',
      textColororderPack: '#232d37',
      textColororderDelivery: '#232d37',
    };
  }

  _renderLoading() {
    return (
      <ActivityIndicator
        style={{marginTop: 100}}
        size="large"
        animating={this.state.showLoading}
      />
    );
  }

  componentWillMount() {
    this.getAllEntity(this.props.sessionId);
    this.getAdminEntity(this.props.sessionId);
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

  // navigate to detailsPage
  _goToOrderDetails(
    partnerId,
    name,
    confirmCartDate,
    amountTotal,
    id,
    state,
    wk_notes,
  ) {
    this.props.sendOrderDetails(
      partnerId,
      name,
      confirmCartDate,
      amountTotal,
      id,
      state,
      wk_notes,
    );
    Actions.internetOrdersDetails();
  }

  render() {
    return (
      <Container>
        <MainHeader
          showBach={true}
          subject="INTERNET_REPORT"
          title={valueString.VALUE_ENTITY}
        />
        {this.showLoading()}
        <View style={entityPage.entityPageTopSectionStyle}>
          <View style={entityPage.sectionSelectNewEntity}>
            <View style={entityPage.titlePickerStyle}>
              <Text style={entityPage.titleStyle}>
                {valueString.VALUE_TITLE_SELECTED_NEW_ENTITY}
              </Text>
            </View>
            <View style={entityPage.valuePickerStyle}>
              <Picker
                renderHeader={backAction => (
                  <Header style={{backgroundColor: '#232d37'}}>
                    <Left />
                    <Body>
                      <Title style={{color: '#fff'}}>
                          select your bed
                      </Title>
                    </Body>
                    <Right>
                      <Button transparent onPress={backAction}>
                        <Icon type="FontAwesome" name="chevron-right" style={{color: '#fff'}} />
                      </Button>
                    </Right>
                  </Header>
                )}
                mode="dropdown"
                onValueChange={this.onValueChangeEntity.bind(this)}
                selectedValue={this.state.selectedEntity}
                iosIcon={<Icon type="FontAwesome" name="chevron-down"/>}
                placeholder="select your bed"
                style={{width: '100%', fontFamily: 'BYekan'}}>
                {this._showListCategoreis(this.state.allListEntity)}
              </Picker>
            </View>
          </View>
          <View style={entityPage.sectionSelectedEntity}>
            <View>
              <Text style={entityPage.selectedSectionTitle}>
                Selected beds :
              </Text>
            </View>
            <View>
              <FlatList
                data={this.props.entityListAll}
                numColumns={1}
                renderItem={this.renderItemsEntity.bind(this)}
                keyExtractor={item => item.id}
                refreshing={this.props.refreshing}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            borderTopColor: '#555',
            borderTopWidth: 2,
            backgroundColor: '#c8c8c8',
            width: '100%',
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => this.updatingAdminEntity()}
            style={[containers.orangButtonAllR]}>
            <Text style={text.titleWhite}>
              {valueString.VALUE_UPDATING_ENTITY}
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

  renderItemsEntity(entity) {
    return <ItemEntity entity={entity} />;
  }

  //   get all entiteis
  getAllEntity(authorization) {
    fetch(`${configuration.MAIN_URL}` + `${restApi.API_ENTITY_LIST}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + authorization,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          allListEntity: responseJson.data,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  // get  admin entiteis
  getAdminEntity(authorization) {
    fetch(`${configuration.MAIN_URL}` + `${restApi.API_ENTITY_ADMIN}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + authorization,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.props.getAllEntityList(responseJson.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // updating admin Entity
  updatingAdminEntity() {
    this.props.managerLoading(true);
    let entityItems = this.props.entityListAll;
    let formBody = [];
    for (let i = 0; i < entityItems.length; i++) {
      let encodedKey = encodeURIComponent('entities[]');
      let encodedValue = encodeURIComponent(entityItems[i].id);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(`${configuration.MAIN_URL}` + `${restApi.API_ENTITY_ADMIN}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.props.sessionId,
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.errors == undefined) {
          this.showMessage('', valueString.VALUE_UPDATE_SUCCESS);
        }
        this.props.managerLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }

  onValueChangeEntity(value) {
    let adminListEntity = [];
    adminListEntity = this.props.entityListAll;
    if (adminListEntity.find(element => element.id == value.id) == undefined) {
      adminListEntity.push(value);
    }
    this.props.getAllEntityList(adminListEntity);
    this.props.setRefresh(true);
    this.setState({
      selectedEntity: value,
    });
  }

  _showListCategoreis(listAllEntity) {
    let listEntity = [];
    for (let i = 0; i < listAllEntity.length; i++) {
      listEntity.push(
        <Item label={listAllEntity[i].title} value={listAllEntity[i]} />,
      );
    }
    return listEntity;
  }

  showLoading() {
    if (this.props.showLoading) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52, 52, 52,.5)',
            zIndex: 10000,
            position: 'absolute',
          }}>
          <Spinner color="white" />
        </View>
      );
    }
    return null;
  }

  showMessage(title, message) {
    Alert.alert(
      title,
      message,
      [
        {
          text: valueString.VALUE_CONFIRM,
          onPress: () => Actions.jump('barCodeReader'),
        },
      ],
      {cancelable: false},
    );
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    managerLoading: showLoading => dispatch(managerLoading(showLoading)),
    getAllEntityList: entityListAll =>
      dispatch(getAllEntityList(entityListAll)),
    setRefresh: refreshing => dispatch(setRefresh(refreshing)),
  };
};

const mapStateToProps = state => {
  return {
    sessionId: state.getSessionId.sessionId,
    entityListAll: state.entityManager.entityListAll,
    refreshing: state.entityManager.refreshing,
    showLoading: state.managerLoading.showLoading,
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(IntiteisList);
