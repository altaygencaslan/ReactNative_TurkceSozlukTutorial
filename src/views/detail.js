import * as React from 'react';
import { Text } from 'react-native';
import Container from '../components/containerComponent';


function DetailView() {
    return (
      <Container position="relative" flex={1} justifyContent="center" alignItems="center">
        <Text> Details Screen </Text>
      </Container>
    )
  }

  export default DetailView;