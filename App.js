/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//导入 react-navigation 组件
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import SplashPage from './src/pages/SplashPage';
import IndexPage from './src/pages/IndexPage';

const AppView = createAppContainer(
  createStackNavigator(
    {
      Splash: {
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
            headerTitle: null //去掉 react-navigation 提供的标题
        }
      }  
    },
    {
      initialRouteName: 'Splash',
      mode: 'card',
      headerMode: 'none'
    }
  )
);

export default class App extends Component {

    render() {
        return ( // 渲染布局
            <AppView />
        );
    }
}


