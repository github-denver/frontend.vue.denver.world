import styled, { css } from 'vue-styled-components'

const selectProps = { className: String }

const selectStyles = css`
  ${(props) =>
    props.className === 'search' &&
    css`
      width: 30%;
      vertical-align: top;
    `}
`

const Select = styled('div', selectProps)`
  display: inline-block;
  position: relative;
  z-index: 1;
  min-width: 90px;
  height: 40px;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  background-position: 100% 50%;

  label {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    padding: 0 12px;
    font-size: 0;
  }

  .text {
    display: inline-block;
    font-size: 14px;
    line-height: 39px;
    text-align: left;
    vertical-align: middle;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 14px;
    height: 14px;
    margin-top: -7px;
  }

  .icon {
    width: 14px;
    height: 14px;
    background-position: 0 -35px;
  }

  select {
    width: 100%;
    height: 39px;
    border: 0 none;
    font-family: inherit;
    line-height: 38px;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  select:focus {
    outline: 1px solid auto;
  }

  ${selectStyles}
`

export default Select
