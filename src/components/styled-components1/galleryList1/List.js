import styled from 'vue-styled-components'

const List = styled.ul`
  margin-top: 10px;

  & li + li {
    margin-top: 10px;
  }

  & .router-link {
    display: block;
    position: relative;
    font-size: 12px;
  }
`

export default List
