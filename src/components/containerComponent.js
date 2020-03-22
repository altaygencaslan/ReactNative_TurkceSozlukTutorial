import { View} from 'react-native'
import styled from 'styled-components'
import { compose, color, size, flexbox, borderRadius } from 'styled-system'

const Container = styled(View)(
    compose(color, 
            size, 
            flexbox, 
            borderRadius),
);

export default Container;