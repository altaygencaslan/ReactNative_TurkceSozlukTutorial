import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import TabBar from './components/tab-bar';
import SearchView from './views/search';
import FavoriteView from './views/favorite';
import HistoryView from './views/history';
import DetailView from './views/detail';
import Container from './components/containerComponent';

import theme from './utils/theme';


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
      <ThemeProvider theme={theme}>
          <Container flex={1} as={SafeAreaView}>
            <NavigationContainer>
              <Tab.Navigator initialRouteName="Search" tabBar={props=> <TabBar{...props}/>} >
                  <Tab.Screen name="Favorite" component={FavoriteView} />
                  <Tab.Screen name="Search" component={SearchStack} />
                  <Tab.Screen name="History" component={HistoryView} />
              </Tab.Navigator>
            </NavigationContainer>
          </Container>
        </ThemeProvider>
            );
}

export default App;