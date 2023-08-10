import styled from 'styled-components'

export const ScoreContainer = styled.div`
  min-height: 120px;
  width: 70%;
  background-color: transparent;
  border: 2px #ffffff solid;
  border-radius: 10px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const GameName = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: #ffffff;
  line-height: 1.5;
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  height: 90px;
  width: 120px;
  border-style: none;
  border-radius: 10px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`

export const ScorePara = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: #223a5f;
  margin-bottom: 2px;
`
export const ScoreValue = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #223a5f;
  margin-top: 2px;
`
