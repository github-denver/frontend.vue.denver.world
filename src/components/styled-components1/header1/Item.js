import styled from 'vue-styled-components'

const Item = styled.li`
  display: inline-block;
  vertical-align: top;

  & + & {
    margin-left: 10px;
  }
`

export default Item
