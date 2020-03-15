import styled, { css } from 'vue-styled-components'

const pagingProps = { className: String }

const pagingStyles = css`
  ${(props) => props.className === 'half' && css``}
`

const Paging = styled('ul', pagingProps)`
  margin-top: 20px;
  font-size: 0;
  text-align: center;

  li {
    display: inline-block;
  }

  li + li {
    margin-left: 12px;
  }

  a,
  span {
    display: block;
    min-width: 30px;
    padding: 7px 4px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1;
  }

  .current {
    font-weight: 700;
    color: rgba(270, 70, 70, 1);
    border: 1px solid rgba(270, 70, 70, 1);
    background-color: #fff;
  }

  ${pagingStyles}
`

export default Paging
