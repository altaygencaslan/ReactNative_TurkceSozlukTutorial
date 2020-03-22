import { TouchableOpacity } from "react-native";
import styled from 'styled-components';
import {compose, color, size, space, flexbox, layout, borderRadius} from 'styled-system';

const Button = styled(TouchableOpacity)(
    compose(color, 
            size,
            space, 
            flexbox,
            layout,
            borderRadius),
);

Button.defaultProps={
    flexDirection:"row",
    aligItems: "center",
    justifyContent:"center",
}

export default Button;