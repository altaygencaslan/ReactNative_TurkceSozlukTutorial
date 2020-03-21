import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const StyledTouchableOpacity = styled(TouchableOpacity)({});

StyledTouchableOpacity.defaultProps = {
    backgroundColor:"#6EB5FF",
    width:140,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
}

export default StyledTouchableOpacity;