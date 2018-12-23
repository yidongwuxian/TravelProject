/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
//导入 react-navigation 组件
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import SplashPage from '../pages/SplashPage';
import IndexPage from '../pages/IndexPage';

const AppNavigator = createStackNavigator({
    SplashPage: {
        screen: SplashPage,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null //去掉 react-navigation 提供的标题
        }
    },
    IndexPage: {
        screen: IndexPage,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null
        }
    }, 
    {
    initialRouteName: "SplashPage"
    }
});

export default createAppContainer(AppNavigator)
