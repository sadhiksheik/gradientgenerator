import {GradientButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, isActive} = props
  const {displayText, directionId} = details

  const buttonClicked = () => {
    changeDirection(directionId)
  }

  return (
    <ListItem>
      <GradientButton
        type="button"
        onClick={buttonClicked}
        activeCondition={isActive}
      >
        {displayText}
      </GradientButton>
    </ListItem>
  )
}

export default GradientDirectionItem
