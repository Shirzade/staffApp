import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {Container} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';
import {homeStyles} from '../../../assets/styles';
import MainHeader from '../elements/MainHeader';
import image from '../../style/image';
import text from '../../style/text';
import containers from '../../style/containers';
import ItemMainPage from '../elements/items/ItemMainPage';
import MomentReportShop from '../elements/screenItems/MomentReportShop';
import {Actions} from 'react-native-router-flux';
import {valueString} from '../../utils/valueString';
import {connect} from 'react-redux';
import ItemInPersonSale from '../elements/items/ItemInPersonSale';

class NeedShop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <MainHeader showBach={false} />
        <Grid style={{backgroundColor: '#232d37'}}>
          <Row size={2}>
            <View style={homeStyles.containerTop} />
          </Row>
          <Row size={4} style={homeStyles.containersBottom}>
            <FlatList
              data={this.props.items}
              numColumns="2"
              renderItem={this.renderItems.bind(this)}
              keyExtractor={item => item.id}
            />
          </Row>
          <Row size={2}>
            <View style={homeStyles.containerTop}>
              {/* <Text>{this.props.description}</Text> */}
            </View>
          </Row>
        </Grid>
      </Container>
    );
  }
  toggleStatusScanner() {
    Actions.barCodeReader({from: 'IMPORT_PRODUCT'});
    // this.props.getPlaceUser("IMPORT_PRODUCT")
  }

  renderItems(item) {
    return <ItemInPersonSale items={item} />;
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
  };
};
const mapStateToProps = state => {
  return {
    active: state.getBarCode.active,
    title: state.getBarCode.title,
    description: state.getBarCode.description,
    authTypeName: state.getBarCode.authTypeName,
    payable: state.getBarCode.payable,
    items: state.getBarCode.items,
  };
};

export default connect(
  mapStateToProps,
  null,
)(NeedShop);
