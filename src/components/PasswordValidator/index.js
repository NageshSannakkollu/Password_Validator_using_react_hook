// Write your code here
import {useState} from 'react'
import {
  ComponentContainer,
  PasswordContainer,
  PasswordInput,
  Heading,
  Paragraph,
  ErrorMessageParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [displayErrorMessage, setDisplayError] = useState(true)
  const [errorMessage, setErrorMessage] = useState(
    'Your Password must be at least 8 characters',
  )
  const onChangeInputPassword = event => {
    setPassword(event.target.value)
  }
  console.log(password)
  const checkPasswordLength = password.length > 8
  console.log(checkPasswordLength)

  if (checkPasswordLength) {
    setDisplayError(false)
    setErrorMessage('')
  }

  return (
    <ComponentContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput
          type="password"
          placeholder="Enter Your Password"
          onChange={onChangeInputPassword}
          value={password}
        />
        {displayErrorMessage && (
          <ErrorMessageParagraph>*{errorMessage}</ErrorMessageParagraph>
        )}
      </PasswordContainer>
    </ComponentContainer>
  )
}

export default PasswordValidator
