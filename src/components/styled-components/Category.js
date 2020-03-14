import styled from 'vue-styled-components'

const categoryProps = { icon: String }

const Category = styled('div', categoryProps)`
  display: inline-block;
  border: 0 none;
  font-family: sans-serif;
  line-height: 1;
  background-color: transparent;
  text-align: center;
`

export default Category
