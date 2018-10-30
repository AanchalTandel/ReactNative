import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import Pdf from 'react-native-pdf';
import ImageZoom from 'react-native-image-pan-zoom';

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});

export default class swiper extends Component {
    render(){
        const source = {uri:'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',cache:true};
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Pdf
                        source={source}
                        onLoadComplete={(numberOfPages,filePath)=>{
                            console.log(`number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page,numberOfPages)=>{
                            console.log(`current page: ${page}`);
                        }}
                        onError={(error)=>{
                            console.log(error);
                        }}
                        style={styles.pdf}/>
                </View>
                <View style={styles.slide3}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                               cropHeight={Dimensions.get('window').height}
                               imageWidth={200}
                               imageHeight={200}>
                        <Image style={{width:200, height:200}}
                               source={{uri:'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'}}/>
                    </ImageZoom>
                </View>
            </Swiper>
        );
    }
}