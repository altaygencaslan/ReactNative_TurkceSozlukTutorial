import * as React from 'react';
import { View, Text, Button } from 'react-native';

function SearchView({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search Screen</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Detail')}
      />
      </View>
    );
  }

  export default SearchView;