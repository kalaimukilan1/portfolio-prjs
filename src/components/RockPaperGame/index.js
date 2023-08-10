import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameResultView from '../GameResultView'

import {
  GameBgContainer,
  PlayingButtonContainer,
  PlayingButton,
  GameImage,
  PopupImage,
  PopupImageContainer,
  PopupCloseBtn,
  RulesButton,
} from './StyledComponents'
import Score from '../Score'

class RockPaperGame extends Component {
  state = {
    randomChoice: '',
    selectedButton: '',
    isPlaying: true,
    score: 0,
    result: '',
  }

  updateResult = (opponentChoice, yourChoice) => {
    let result = ''

    const wonRule1 = yourChoice.id === 'PAPER' && opponentChoice.id === 'ROCK'
    const wonRule2 =
      yourChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER'
    const wonRule3 =
      yourChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS'

    const loseRule1 =
      yourChoice.id === 'SCISSORS' && opponentChoice.id === 'ROCK'
    const loseRule2 = yourChoice.id === 'ROCK' && opponentChoice.id === 'PAPER'
    const loseRule3 =
      yourChoice.id === 'PAPER' && opponentChoice.id === 'SCISSORS'

    if (wonRule1 || wonRule2 || wonRule3) {
      result = 'YOU WON'
    } else if (loseRule1 || loseRule2 || loseRule3) {
      result = 'YOU LOSE'
    } else {
      result = 'IT IS DRAW'
    }
    return result
  }

  onClickPlayingButton = event => {
    const {choicesList} = this.props
    const randomValueIndex = Math.floor(Math.random() * 3)
    const randomValue = choicesList[randomValueIndex]
    const resultValue = this.updateResult(randomValue, event.target)

    if (resultValue === 'YOU WON') {
      this.setState(prevState => ({
        selectedButton: event.target.src,
        isPlaying: false,
        randomChoice: randomValue,
        result: resultValue,
        score: prevState.score + 1,
      }))
    } else if (resultValue === 'YOU LOSE') {
      this.setState(prevState => ({
        selectedButton: event.target.src,
        isPlaying: false,
        randomChoice: randomValue,
        result: resultValue,
        score: prevState.score - 1,
      }))
    }

    this.setState({
      selectedButton: event.target.src,
      isPlaying: false,
      randomChoice: randomValue,
      result: resultValue,
    })
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <PlayingButtonContainer>
        {choicesList.map(eachBtn => (
          <PlayingButton
            type="button"
            data-testid={`${eachBtn.value}Button`}
            key={eachBtn.id}
          >
            <GameImage
              src={eachBtn.imageUrl}
              alt={eachBtn.id}
              id={eachBtn.id}
              onClick={this.onClickPlayingButton}
            />
          </PlayingButton>
        ))}
      </PlayingButtonContainer>
    )
  }

  renderRulesButton = () => (
    <>
      <Popup
        modal
        trigger={<RulesButton type="button">Rules</RulesButton>}
        height={400}
        width={400}
      >
        {close => (
          <PopupImageContainer>
            <PopupCloseBtn>
              <RiCloseLine onClick={() => close()} size={20} />
            </PopupCloseBtn>

            <PopupImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupImageContainer>
        )}
      </Popup>
    </>
  )

  clickedPlayAgain = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying, score, randomChoice, selectedButton, result} = this.state

    return (
      <GameBgContainer>
        <Score scoreValue={score} />
        {isPlaying ? (
          this.renderPlayingView()
        ) : (
          <GameResultView
            randomChoice={randomChoice}
            selectedButton={selectedButton}
            result={result}
            clickedPlayAgain={this.clickedPlayAgain}
          />
        )}
        {this.renderRulesButton()}
      </GameBgContainer>
    )
  }
}

export default RockPaperGame
