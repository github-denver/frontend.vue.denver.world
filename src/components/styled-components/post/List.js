import styled from 'vue-styled-components'

const List = styled.div`
  margin-top: 10px;

  .list li {
    padding: 10px 0;
  }

  .list li + li {
    border-top: 1px solid #e9e9e9;
  }

  .list a {
    display: table;
    position: relative;
  }

  .list .container {
    display: table-cell;
    padding-left: 10px;
    vertical-align: middle;
  }

  .list .subject {
    font-size: 14px;
    line-height: 1.4;
  }

  .list .information {
    margin-top: 10px;
    font-size: 0;
  }

  .list .text {
    position: relative;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 12px;
    color: #888;
  }

  .list .text:before {
    position: absolute;
    top: 4px;
    bottom: 3px;
    left: 0;
    border-left: 1px solid #e9e9e9;
    content: '';
  }

  .list .text:first-child {
    margin-left: 0;
    padding-left: 0;
  }

  .list .text:first-child:before {
    display: none;
  }
`

export default List
