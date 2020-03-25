import * as React from 'react';
import { Text, ImageBackground, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {Logo} from '../components/icons';
import SearchBox from '../components/searchBoxComponent';
import Container from '../components/containerComponent';
import bg from '../assets/bg.jpg'
import SafeAreaView from 'react-native-safe-area-view'
import theme from '../utils/theme'

function SearchView() {
  const [isSearchFocus, SetSearchFocus] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.red);
    }, [])
  )

    return (
      <Container as={SafeAreaView} bg="red" flex={1}>
        <StatusBar barStyle="light-content" />

        <Container
          position="relative"
          zIndex={1}
          style={{ height: isSearchFocus ? 0 : 290 }}>
          <Container
            as={ImageBackground}
            source={bg}
            style={{ width: '100%', height: isSearchFocus ? 0 : '100%' }}>
            <Container flex={1} alignItems="center" justifyContent="center">
              <Logo color="white" />
            </Container>

            <Container padding={16} width="100%" marginBottom={-42}>
              <SearchBox onChangeFocus={status => SetSearchFocus(status)} />
            </Container>
          </Container>
        </Container>

        <Container
          flex={1}
          bg="white"
          paddingTop={isSearchFocus ? 50 : 10}>
          <Container padding={30} flex={1}>
            <Text>Hello</Text>
          </Container>
        </Container>
      </Container>
    )
  }

  export default SearchView