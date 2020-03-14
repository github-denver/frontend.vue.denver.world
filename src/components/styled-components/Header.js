import styled from 'vue-styled-components'

const HeaderProps = { icon: String }

export const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
`

const Header = styled('header', HeaderProps)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  padding: 10px;
  background-color: #ff4646;

  & > button {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`

export default Header
