import styled from 'vue-styled-components'

const squareProps = { icon: String }

const Square = styled('button', squareProps)`
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 10px;
  border: 1px solid rgba(270, 70, 70, 1);
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  background-color: transparent;
`

const Link = Square.withComponent('a')

/*
color: ${(props) => (props.color ? props.color : 'transparent')};
background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
*/

export { Square, Link }
