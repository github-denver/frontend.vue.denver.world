import styled, { css } from 'vue-styled-components'

const searchProps = { className: String }

const searchStyles = css`
  ${(props) => props.className === 'half' && css``}
`

const Search = styled('div', searchProps)`
  margin-top: 20px;
  font-size: 0;

  ${searchStyles}
`

export default Search
