import styled, { css } from 'vue-styled-components'

const buttonProps = { className: String }

const buttonStyles = css`
  ${(props) =>
    props.className === 'half' &&
    css`
      .inner {
        display: inline-block;
        width: 50%;
        padding-left: 10px;
        box-sizing: border-box;
        vertical-align: top;
      }

      .inner:first-child {
        padding-left: 0;
      }
    `}
`

const Button = styled('div', buttonProps)`
  margin-top: 20px;
  font-size: 0;

  .button_global ~ .button_global {
    margin-top: 10px;
  }

  ${buttonStyles}

  .triple {
    margin-left: -10px;
  }

  .triple .inner {
    display: inline-block;
    width: 33.33%;
    padding-left: 10px;
    box-sizing: border-box;
    vertical-align: top;
  }

  .triple .inner:first-child {
    padding-left: 0;
  }
`

export default Button
