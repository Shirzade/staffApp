import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { connect } from "react-redux";
import { internetOrderStyles } from "../../../../assets/styles";
import { Actions } from "react-native-router-flux";
import { sendOrderDetails } from "../../../redux/actions";

class ItemInternetOrders extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { order } = this.props;
    return (
      <TouchableOpacity
        style={
          order.index % 2 == 0
            ? internetOrderStyles.containerItemListOddDetails
            : internetOrderStyles.containerItemListDetails
        }

      >
        <View style={internetOrderStyles.mainListDetailsRequest}>
          <View>
               <View style={internetOrderStyles.containerRequestDetails}>
                  <View style={internetOrderStyles.subContainerRequestDetails}>
                      <Text style={internetOrderStyles.mainListText}>
                        {order.item.item_title} 
                      </Text>
                      <Text style={internetOrderStyles.mainListText}>name Item</Text>
                  </View>
                  <View style={internetOrderStyles.containerRequestDetails}>
                    <View style={internetOrderStyles.subContainerRequestDetails}>
                        <Text style={internetOrderStyles.mainListText}>
                            {order.item.item_title}
                          </Text>
                          <Text>name Item</Text>
                    </View>
                  </View>
               </View>
               <View>
                  <Text style={internetOrderStyles.mainListText}>
                         {order.item.item_description}
                   </Text>
                   <Text style={internetOrderStyles.mainListText}>
                       ssssww
                     </Text> 
               </View>

          </View>
          <View>
              <Text style={internetOrderStyles.mainListText}>
                {order.item.status}
              </Text>
              {/* <Text style={internetOrderStyles.mainListText}>
                {order.item.amount_total}
              </Text> */}
              {/* {this._showImageState(order.item.state)} */}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _goToOrderDetails(
    partnerId,
    name,
    confirmCartDate,
    amountTotal,
    id,
    state,
    wk_notes
  ) {
    this.props.sendOrderDetails(
      partnerId,
      name,
      confirmCartDate,
      amountTotal,
      id,
      state,
      wk_notes
    );
    Actions.internetOrdersDetails();
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    sendOrderDetails: (
      user,
      number,
      confirmCartDate,
      amountTotal,
      orderId,
      stateOrder,
      note
    ) =>
      dispatch(
        sendOrderDetails(
          user,
          number,
          confirmCartDate,
          amountTotal,
          orderId,
          stateOrder,
          note
        )
      )
  };
};

export default connect(
  null,
  mapDisPatchToProps
)(ItemInternetOrders);
