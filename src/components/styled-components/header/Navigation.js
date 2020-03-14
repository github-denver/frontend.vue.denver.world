import styled from 'vue-styled-components'

const Navigation = styled.div`
  overflow: hidden;
  margin-top: 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;

  & > ul {
    background-color: #fff;
  }

  & > ul > li > span {
    display: block;
    padding: 18px 10px;
    font-size: 14px;
    font-weight: 700;
  }

  & > ul > li + li {
    border-top: 1px solid #e9e9e9;
  }

  & > ul > li > ul {
    border-top: 1px solid #e9e9e9;
    margin: 0 -1px -1px -1px;
    font-size: 0;
    background-color: #f9f9f9;
  }

  & > ul > li > ul > li:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    border-left: 1px solid #f9f9f9;
    content: '';
  }

  & > ul > li > ul > li {
    display: inline-block;
    position: relative;
    width: 50%;
    margin-top: -1px;
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
    vertical-align: top;
  }

  & > ul > li > ul > li > a {
    display: block;
    margin-left: -1px;
    padding: 13px 10px;
    font-size: 14px;
    text-align: center;
  }
`

export default Navigation
