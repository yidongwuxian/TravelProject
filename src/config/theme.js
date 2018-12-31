'use strict';

import {Dimensions, Platform, PixelRatio} from 'react-native';
export default module = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    btnActiveOpacity: 0.5,
    actionBar: {
        height: (Platform.OS === 'android' ? 56 : 44 ),
        backgroundColor: '#fff'
    },
    barContentPad: (Platform.OS === 'android' ? 0 : (isIphoneX() ? 42 : 20)),
    bottomPadding: isIphoneX() ? 18 : 0,
    // 常用颜色
    primaryColor: '#EE0000',
    lightGray: '#f5f5f5',
    darkGray: '#e5e5e5',
    lightBlack: '#333333'
};


export function isIphoneX() {
    let dimension = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimension.height === 812 || dimension.width === 812)
    );
}