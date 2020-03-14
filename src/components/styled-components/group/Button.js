import styled from 'vue-styled-components'

const Button = styled.div`
  font-size: 0;

  .button_global ~ .button_global {
    margin-top: 10px;
  }

  .half .inner {
    display: inline-block;
    width: 50%;
    padding-left: 10px;
    box-sizing: border-box;
    vertical-align: top;
  }

  .half .inner:first-child {
    padding-left: 0;
  }

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
