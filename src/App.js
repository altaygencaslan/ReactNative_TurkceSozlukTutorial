import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SearchView from './views/search';
import FavoriteView from './views/favorite';
import HistoryView from './views/history';
import DetailView from './views/detail';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchView} />
            <HomeStack.Screen name="Detail" component={DetailView} />
      </HomeStack.Navigator>
    );
  }

function App(){
    return (
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Favorite" component={FavoriteView} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="History" component={HistoryView} />
            </Tab.Navigator>
            </NavigationContainer>
            );
}

export default App;