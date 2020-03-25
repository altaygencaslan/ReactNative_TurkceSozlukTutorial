import * as React from 'react';
import { Text, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Container from '../components/containerComponent';
import SafeAreaView from 'react-native-safe-area-view'

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor("#FFF");
    }, [])
  )

  return (
    <Container as={SafeAreaView} bg="white" flex={1}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Container
        position="relative"
        justifyContent="center"
        alignItems="center">
        <Text>History Screen</Text>
      </Container>
    </Container>
  )
  }

  export default HistoryView