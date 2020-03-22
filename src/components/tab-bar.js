import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/button';
import Container from '../components/containerComponent';

import { Bookmark, RotateCcw, Search } from '../components/icons';

import theme from '../utils/theme';

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor:'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label == "Search" ? (
          <Container  bg="white" borderRadius="full" marginTop={-15} paddingTop={15} size={76} alignItems="center">
            <Button key={label} flexDirection="column" alignItems="center" borderRadius="full" size={56} backgroundColor={theme.colors.red} onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Container>
        ):
        (
          <Button key={label} flexDirection="column" alignItems="center" flex={1} paddingTop={6} height={56} onPress={onPress}>
            { (label == "History" && <Bookmark stroke={theme.colors.gray} />) }
            { (label == "Favorite" && <RotateCcw stroke={theme.colors.gray} />) }
            <Container mt={6} size={4} bg={isFocused ? "red" : "transparent"} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;