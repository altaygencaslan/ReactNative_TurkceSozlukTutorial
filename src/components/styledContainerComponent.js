import styled from 'styled-components'
import Container from './containerComponent'

const StyledContainer = styled(Container)({});
StyledContainer.defaultProps = {
    backgroundColor:"#E11E3C",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
}

export default StyledContainer;