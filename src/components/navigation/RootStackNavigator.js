import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import { observer } from 'mobx-react/native';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

//import appStore from '../../stores/appStore';
import NavigationService from './NavigationService';
import IntroScreen from '../screen/Intro';


import SwitchNavigator from '../navigation/SwtichNavigator';
import StackNavigator from '../navigation/StackNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import MaterialTopTabNavigator from '../navigation/MaterialTopTabNavigator';
import MaterialBottomTabNavigator from '../navigation/MaterialBottomTabNavigator';
import DrawerNavigator from '../navigation/DrawerNavigator';
import CustomNavigator from '../navigation/CustomNavigator';
import NotFoundScreen from '../screen/NotFound';

//@observer
class RootStackNavigator extends React.Component {
  state = {
    initScreen: 'Intro',
  };

  render() {
    const routeConfig = {
      Intro: {
        screen: IntroScreen,
        path: 'Intro',
      },
      SwitchNavigator: {
        screen: SwitchNavigator,
      },
      StackNavigator: {
        screen: StackNavigator,
      },
      BottomTabNavigator: {
        screen: BottomTabNavigator,
      },
      MaterialTopTabNavigator: {
        screen: MaterialTopTabNavigator,
      },
      MaterialBottomTabNavigator: {
        screen: MaterialBottomTabNavigator,
      },
      DrawerNavigator: {
        screen: DrawerNavigator,
      },
      CustomNavigator: {
        screen: CustomNavigator,
      },
      NotFound: {
        screen: NotFoundScreen,
        path: 'NotFound',
      },
    };

    const navigatorConfig = {
      initialRouteName: this.state.initScreen,
      // header: null,
      // headerMode: 'none',
      gesturesEnabled: true,
      statusBarStyle: 'light-content',
      transitionConfig: () => ({ screenInterpolator:
      //   appStore.rootNavigatorActionHorizontal
      //     ? StackViewStyleInterpolator.forHorizontal
           StackViewStyleInterpolator.forVertical,
      }),
    };

    const RootNavigator = createStackNavigator(routeConfig, navigatorConfig);

    return (      
      <RootNavigator
        ref={v => {
          NavigationService.setTopLevelNavigator(v);
        }}
      />
    );
  }
}

export default RootStackNavigator;
