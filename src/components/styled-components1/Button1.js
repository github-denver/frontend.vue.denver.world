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

  ${(props) =>
    props.className === 'action' &&
    css`
      color: #fff;
      border-color: transparent;
      background-color: #ff4646;
    `}

  ${(props) =>
    props.className === 'delete' &&
    css`
      color: #fff;
      border-color: transparent;
      background-color: rgba(88, 100, 125, 1);
    `}

  ${(props) =>
    props.className === 'search' &&
    css`
      color: #fff;
      border-color: transparent;
      background-color: rgba(88, 100, 125, 1);
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

const RectangleButton = styled('button', buttonProps)`
  width: 100%;
  padding: 13px 0;
  border: 1px solid #ff4646;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background-color: transparent;
  text-align: center;

  ${buttonStyles}
`

export { Square, RectangleButton }