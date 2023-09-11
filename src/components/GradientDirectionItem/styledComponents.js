import styled from 'styled-components'

export const ListItem = styled.li``

export const GradientButton = styled.button`
  opacity: ${props => (props.activeCondition ? '1' : '0.5')};
`
