import React,{ Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';
import {Actions} from "react-native-router-flux";


export default class Home extends Component {

    constructor(){
        super()
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'yellow'}}>
                <TouchableHighlight  underlayColor='transparent' onPress={() => Actions.pop() }>
                    <View style={{margin:30}}>
                        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>BACK</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  underlayColor='transparent' onPress={() => Actions.second() }>
                    <View style={{margin:30}}>
                        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>GO TO NEXT PAGE FROM REACT NATIVE</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

}