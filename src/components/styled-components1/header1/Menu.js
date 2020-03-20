import styled from 'vue-styled-components'

const Menu = styled.div`
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 320px;
  margin: 0 auto;
  padding-bottom: 40px;
  background-color: #f1f1f1;

  & > button {
    position: absolute;
    top: 20px;
    right: 10px;
  }
`

export default Menu
