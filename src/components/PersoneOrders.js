import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native'

const PersonOrders = ({backgroundColor,onSelect=f=>f}) =>(
    <TouchableHighlight style={styles.button}
    onPress={()=>onSelect(backgroundColor)}>  
     <View style={styles.row}>
        <View style={[
          styles.sample,
           {backgroundColor:backgroundColor}
          ]}/>
        <Text style={styles.text}>{backgroundColor}</Text>
     </View>
     </TouchableHighlight>
)
const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    button:{
      fontSize:30,
      margin:10,
      padding:10,
      borderWidth:2,
      borderRadius:10,
      alignSelf:'stretch',
      textAlign:'center',
      backgroundColor:'#eee'
    },
    row:{
       flexDirection:'row',
        alignItems:'center'
    },
    sample:{
      height:20,
       width:20,
       borderRadius:10,
       margin:5,
       backgroundColor:'white'
    },
    text:{
      fontSize:30,
      margin:5
    }
  
  });

  export default PersonOrders