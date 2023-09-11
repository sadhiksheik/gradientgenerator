import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  ResponsiveContainer,
  Heading,
  Para,
  ButtonsList,
  InputContainer,
  ColorContainer,
  ColorCode,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    gradientDirection: 'top',
    color1Input: '#8ae323',
    color2Input: '#014f7b',
    activeId: gradientDirectionsList[0].directionId,
  }

  changeColor1 = event => {
    this.setState({color1Input: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2Input: event.target.value})
  }

  changeDirection = id => {
    this.setState({activeId: id})
  }

  generateGradient = () => {
    const {color1Input, color2Input, activeId} = this.state
    const direction = gradientDirectionsList.filter(
      each => each.directionId === activeId,
    )
    const {value} = direction[0]
    this.setState({
      color1: color1Input,
      color2: color2Input,
      gradientDirection: value,
    })
  }

  render() {
    const {
      color1,
      color2,
      gradientDirection,
      color1Input,
      color2Input,
      activeId,
    } = this.state

    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradient={`to ${gradientDirection}, ${color1}, ${color2}`}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <ButtonsList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                details={each}
                changeDirection={this.changeDirection}
                isActive={activeId === each.directionId}
              />
            ))}
          </ButtonsList>
          <Para>Pick The Colors </Para>
          <InputContainer>
            <ColorContainer>
              <ColorCode>{color1Input}</ColorCode>
              <ColorInput
                type="color"
                onChange={this.changeColor1}
                value={color1Input}
              />
            </ColorContainer>
            <ColorContainer>
              <ColorCode>{color2Input}</ColorCode>
              <ColorInput
                type="color"
                onChange={this.changeColor2}
                value={color2Input}
              />
            </ColorContainer>
          </InputContainer>
          <GenerateButton type="button" onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
