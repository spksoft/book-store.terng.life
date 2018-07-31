import styled from 'styled-components'
const Logo = styled.img`
  width: ${props => props.width ? props.width : '272px'};
  height: ${props => props.height ? props.height : '92px'};
`

export default Logo