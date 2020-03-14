import styled from 'vue-styled-components'

const HeadingProps = { icon: String }

const Heading = styled('h1', HeadingProps)`
  display: table;
  margin: 0 auto;
  text-align: center;

  & > a {
    display: table-cell;
    height: 30px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    vertical-align: middle;
  }
`

export default Heading
