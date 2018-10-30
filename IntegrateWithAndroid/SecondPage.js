import React,{ Component } from 'react';
import {
    View
} from 'react-native';


export default class Second extends Component {

    constructor(){
        super()
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'green'}}/>
        );
    }

}