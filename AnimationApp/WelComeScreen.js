import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    Image,
    Dimensions
} from 'react-native';

export default class WelCome extends Component {
    constructor() {
        super();
        this.scale = new Animated.Value(0);
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.scaling()
    }

    scaling() {
        this.scale.setValue(0);
        Animated.timing(
            this.scale,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.poly,
            }
        ).start(() => {
            if (this.scale._value !== 1) {
                this.scaling()
            }else{
                setTimeout(()=>{
                    //this.spin()
                },100)
            }
        })
    }

    spin () {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {

        const scaleText = this.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1]
        });
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={style.container}>
                <Image style={style.bgImage} source={require('./image/background.jpg')} resizeMode={'stretch'}/>
                <View style={{flex:0.5,position: 'absolute',justifyContent:'flex-end',height:'50%'}}>
                    <Animated.View style={{transform: [{scale: scaleText}, {rotate: spin}]}}>
                        <Text style={style.titleText}>Welcome To My New App</Text>
                    </Animated.View>
                </View>
            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'white'
    },
    bgImage: {
        flex: 1,
        width: Dimensions.get('window').width
    }
});