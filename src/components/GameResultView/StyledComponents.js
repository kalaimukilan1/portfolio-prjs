import styled from 'styled-components'

export const ResultImagesContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const ResultPlayerAndImageContainer = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayerName = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
`
export const PlayerImg = styled.img`
  height: 200px;
  width: 200px;

  @media screen and (max-width: 500px) {
    height: 130px;
    width: 130px;
  }
`
export const ResultPara = styled.p`
  font-size: 35px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
`
export const PlayAgainButton = styled.button`
  height: 40px;
  width: 150px;
  background-color: #ffffff;
  border-style: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #223a5f;
  font-family: 'Bree Serif';
`

export const ResultParaAndButtonContainer = styled.div``
