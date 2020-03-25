import React from 'react';
import { Platform } from 'react-native';
import Button from '../components/button';
import Container from '../components/containerComponent';

import { Bookmark, RotateCcw, Search } from '../components/icons';

import theme from '../utils/theme';

function TabBar({ state, descriptors, navigation }) {
  return (
    <Container
      paddingBottom={10}
      bg="white"
      flexDirection="row"
      bg={Platform.OS == 'android' ? '#F4F4F4' : 'white'}
      style={{ shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 24 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return label == 'Search' ? (
          <Container
            key={label}
            bg={Platform.OS == 'android' ? '#F4F4F4' : 'white'}
            borderRadius="full"
            marginTop={-15}
            paddingTop={15}
            size={76}
            alignItems="center">
            <Button
              key={label}
              flexDirection="column"
              alignItems="center"
              borderRadius="full"
              size={56}
              backgroundColor={theme.colors.red}
              onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Container>
        ) : (
          <Button
            key={label}
            flexDirection="column"
            alignItems="center"
            flex={1}
            paddingTop={6}
            height={56}
            onPress={onPress}>
            {label == 'History' && (
              <Bookmark
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label == 'Favorite' && (
              <RotateCcw
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Container
              mt={6}
              size={4}
              borderRadius="full"
              bg={isFocused ? 'red' : 'transparent'}
            />
          </Button>
        )
      })}
    </Container>
  )
}

export default TabBar;