import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StyledContainer from '../components/styledContainerComponent';
import searchStyle from '../styles/searchStyleSheet'; //for sample

function SearchView({ navigation }) {
    return (      
      <StyledContainer>
        <Text>Updated Search Screen</Text>
        <TouchableOpacity style={searchStyle.btnDetails} onPress={() => navigation.navigate('Detail')} >
          <Text>Go to Details</Text>
        </TouchableOpacity>
      </StyledContainer>
    );
  }

  export default SearchView