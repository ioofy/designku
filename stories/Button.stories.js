/* eslint-disable import/no-anonymous-default-export */
import Button from '../components/Button'
import styled from '@emotion/styled'

export default {
  title: 'Components/Button',
  component: Button,
}

const ButtonCstm = styled.button`
  outline: none;
  border: none;
  padding: 12px;
  width: 7.5rem;
  height: 45px;
  font-family: 'Grotesk';
  cursor: pointer;
  font-size: 15px;
`

export const Buttons = ({
  children,
  background,
  marginTop,
  marginLeft,
  marginRight,
  borderRadius,
  width,
  height,
  fontSize,
}) => (
  <>
    <div className="button-wrap">
      <ButtonCstm
        style={{
          background,
          marginTop,
          marginLeft,
          marginRight,
          borderRadius,
          width,
          fontSize,
          height,
        }}
      >
        {children}
      </ButtonCstm>
    </div>
  </>
)
