import styled from 'vue-styled-components'

const buttonProps = { icon: String }

const Square = styled('button', buttonProps)`
  display: inline-block;
  border: 0 none;
  font-family: sans-serif;
  line-height: 1;
  background-color: transparent;
  text-align: center;
`

export default Square
