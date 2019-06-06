import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import BackButton from './components/BackButton';
import Home from './pages/Home';
import Result from './pages/Result';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#2c9dfb',
    elevation: 0
  },
  headerTitleStyle: {
    color: '#ffffff',
    fontSize: 17
  },
  headerBackTitle: null,
  headerBackImage: <BackButton />
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: ''
      }
    },
    Result: {
      screen: Result,
      navigationOptions: {
        title: '',
        headerStyle: {
          backgroundColor: '#2c9dfb',
          elevation: 0
        }
      }
    }
  },
  {
    defaultNavigationOptions,
    initialRouteName: 'Home'
  }
);

export default createAppContainer(HomeStack);
