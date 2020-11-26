
import React from 'react'
import { Animated, Dimensions } from 'react-native'
import {Button,View,Text,Icon} from 'native-base'
import {lightBoxStyles} from '../../../assets/styles'
import {Actions} from 'react-native-router-flux'



const { height: deviceheight, width: deviceWidth } = Dimensions.get('window');

export default class BaseLightBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(0)
        }

    }


    componentWillMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200
        }).start()
    }

    close(){
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 200
        }).start(Actions.pop)
    }


    _renderLightBox() {
        const { children, verticallPercent = 1, horizontallPercent = 1 } = this.props;
        const width = verticallPercent ? deviceWidth * verticallPercent : deviceWidth;
        const height = horizontallPercent ? deviceheight * horizontallPercent : deviceheight;

        return (
            <View style={{ width, height,justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:5}}>
                 {children}
                  <Button transparent style={{position:'absolute',top:0,left:0}} onPress={()=>this.close()}>
                      <Icon name='md-close-circle' style={{fontSize:30}}/>
                  </Button>
            </View>
        )
    }


    render() {
        return (

            <Animated.View style={[lightBoxStyles.loginLightBox,{opacity:this.state.opacity}]}>
                {this._renderLightBox()}
            </Animated.View>
        )
    }
}