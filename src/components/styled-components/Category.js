import styled from 'vue-styled-components'

const Category = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e9e9e9;

  .category {
    margin: 10px -10px 0;
  }

  & > div > ul {
    overflow: auto;
    padding-right: 10px;
    font-size: 0;
    white-space: nowrap;
  }

  & > div > ul > li {
    display: inline-block;
    width: 25%;
    padding-left: 10px;
    box-sizing: border-box;
    vertical-align: top;
  }

  & > div > ul > li > div {
    position: relative;
    padding-top: 100%;
  }

  & > div > ul > li > div > a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 700;
    background-color: #f9f9f9;
    text-align: center;
  }

  & > div > ul > li > div > a > span {
    display: table;
    width: 100%;
    height: 100%;
  }

  & > div > ul > li > div > a > span > span {
    display: table-cell;
    vertical-align: middle;
  }
`

export default Category
