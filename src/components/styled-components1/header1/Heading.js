import styled from 'vue-styled-components'

const Heading = styled.h1`
  display: table;
  margin: 0 auto;
  text-align: center;

  .router-link {
    display: table-cell;
    height: 30px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    vertical-align: middle;
  }
`

export default Heading
