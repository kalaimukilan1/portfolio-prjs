import styled from 'styled-components'

export const GameBgContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
  padding: 20px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayingButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;
  padding-left: 0px;
`

export const PlayingButton = styled.button`
  border-style: none;
  background-color: transparent;
  outline: none;
  width: 40%;
`
export const GameImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 10px;
`
export const PopupImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 400px;
  width: 500px;
  padding: 5px;
`

export const PopupImage = styled.img`
  height: 300px;
  width: 400px;
  margin-top: 10px;
`

export const PopupCloseBtn = styled.button`
  border-style: none;
  outline: none;
  align-self: flex-end;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  border-style: none;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  font-size: 12px;
  color: #223a5f;
  font-weight: 600;
  align-self: flex-end;
  margin-top: 50px;
`
