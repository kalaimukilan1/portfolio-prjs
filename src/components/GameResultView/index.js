import {
  ResultImagesContainer,
  ResultPlayerAndImageContainer,
  PlayerName,
  PlayerImg,
  ResultPara,
  PlayAgainButton,
  ResultParaAndButtonContainer,
} from './StyledComponents'

const GameResultView = props => {
  const {randomChoice, selectedButton, result, clickedPlayAgain} = props

  const onClickPlayAgain = () => {
    clickedPlayAgain()
  }

  return (
    <>
      <ResultImagesContainer>
        <ResultPlayerAndImageContainer>
          <PlayerName>YOU</PlayerName>
          <PlayerImg src={selectedButton} alt="your choice" />
        </ResultPlayerAndImageContainer>

        <ResultPlayerAndImageContainer>
          <PlayerName>OPPONENT</PlayerName>
          <PlayerImg src={randomChoice.imageUrl} alt="opponent choice" />
        </ResultPlayerAndImageContainer>
      </ResultImagesContainer>
      <ResultParaAndButtonContainer>
        <ResultPara>{result}</ResultPara>
        <PlayAgainButton onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainButton>
      </ResultParaAndButtonContainer>
    </>
  )
}

export default GameResultView
