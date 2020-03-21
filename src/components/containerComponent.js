import { View} from 'react-native'
import styled from 'styled-components'
import { compose, color, size, flexbox } from 'styled-system'

const Container = styled(View)(compose(color, size, flexbox));

export default Container;