// Style your elements here
import styled from 'styled-components'

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`
export const PasswordContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  color: #ffffff;
  line-height: 0.5px;
`
export const PasswordInput = styled.input`
  padding: 10px 15px;
  cursor: pointer;
  outline: none;
  margin-top: 15px;
`

export const Heading = styled.h1`
  font-size: 35px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  font-size: 12px;
`
export const ErrorMessageParagraph = styled.p`
  color: #ef4444;
`
