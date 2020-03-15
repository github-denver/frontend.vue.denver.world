import styled, { css } from 'vue-styled-components'

const inputProps = { className: String }

const inputStyles = css`
  ${(props) =>
    props.className === 'search' &&
    css`
      display: inline-block;
      width: 70%;
      padding-left: 10px;
      box-sizing: border-box;
      vertical-align: top;

      .field_global {
        width: 100%;
      }
    `}

  ${(props) =>
    props.className === 'full' &&
    css`
      display: block;
    `}
`

const Input = styled('div', inputProps)`
  display: inline-block;
  position: relative;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  span {
    display: block;
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
  }

  input {
    width: 100%;
    height: 38px;
    padding: 10px;
    border: 0 none;
    box-sizing: border-box;
    font-size: 14px;
    font-family: sans-serif;
  }

  input[type='file'] {
    height: auto;
  }

  .field_global.style_underline {
    border: 0 none;
    border-bottom: 2px solid #333;
  }

  .field_global.style_underline .field_local {
    padding: 10px;
  }

  ${inputStyles}
`

export default Input
