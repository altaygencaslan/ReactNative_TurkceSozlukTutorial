import { TextInput } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, typography, space, borderRadius, shadow } from 'styled-system'

const Input = styled(TextInput)(
    compose(color, 
            size, 
            typography,
            space,
            borderRadius,
            shadow),
);

export default Input;