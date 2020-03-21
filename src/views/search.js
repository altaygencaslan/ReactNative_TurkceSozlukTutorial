import * as React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledContainer from '../components/styledContainerComponent';
import StyledTouchableOpacity from '../components/styledButtonComponent';
import searchStyle from '../styles/searchStyleSheet'; //for sample

function SearchView({ navigation }) {
    return (      
      <StyledContainer>
        <Text>Search Screen</Text>
        <TouchableOpacity style={searchStyle.btnDetails} onPress={() => navigation.navigate('Detail')} >
          <Text>Go to Details</Text>
        </TouchableOpacity>
        <StyledTouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text>StyledTouchableOpacity'de bg ayarlanmıyor!</Text>
        </StyledTouchableOpacity>
      </StyledContainer>
    );
  }

  export default SearchView;