import {
  ScoreContainer,
  GameName,
  ScoreCard,
  ScorePara,
  ScoreValue,
} from './StyledComponents'

const Score = props => {
  const {scoreValue} = props
  return (
    <>
      <ScoreContainer>
        <GameName>
          ROCK <br />
          PAPER
          <br />
          SCISSORS
        </GameName>

        <ScoreCard>
          <ScorePara>Score</ScorePara>
          <ScoreValue>{scoreValue}</ScoreValue>
        </ScoreCard>
      </ScoreContainer>
    </>
  )
}
export default Score
