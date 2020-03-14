import styled, { css } from 'vue-styled-components'

const buttonProps = { className: String }

const buttonStyles = css`
  ${(props) =>
    props.className === 'hamburger' &&
    css`
      position: absolute;
      top: 10px;
      left: 10px;
    `}
`

const Square = styled('button', buttonProps)`
  display: inline-block;
  border: 0 none;
  font-family: sans-serif;
  line-height: 1;
  background-color: transparent;
  text-align: center;

  ${buttonStyles}
`

export default Square
