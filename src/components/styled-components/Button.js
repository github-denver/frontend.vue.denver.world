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

const Rectangle = styled('span', buttonProps)`
  display: block;
  margin-top:10px;

  &:first-child {
    margin-top: 0;
  }

  a {
    display: block;
    padding: 13px 0;
    border: 1px solid #ff4646;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    color: #ff4646;
    background-color: #fff;
    text-align: center;

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
  }
`

export { Square, Rectangle }
