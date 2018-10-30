import React,{ Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import App from './App';
import HomePage from './HomePage';
import Second from './SecondPage';

export default class Router1 extends Component{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="app" hideNavBar={false} component={App}/>
                    <Scene key="homePage" hideNavBar={false} component={HomePage}/>
                    <Scene key="second" hideNavBar={false} component={Second}/>
                </Stack>
            </Router>
        );
    }
}