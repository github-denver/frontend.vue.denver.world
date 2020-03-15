import styled from 'vue-styled-components'

const Read = styled.div`
  .header {
    display: table;
    padding: 10px 0;
  }

  .header .container {
    display: table-cell;
    padding-left: 10px;
    vertical-align: middle;
  }

  .header .subject {
    font-size: 14px;
    line-height: 1.4;
  }

  .header .information {
    margin-top: 10px;
    font-size: 0;
  }

  .header .text {
    position: relative;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 12px;
    color: #888;
  }

  .header .text:before {
    position: absolute;
    top: 4px;
    bottom: 3px;
    left: 0;
    border-left: 1px solid #e9e9e9;
    content: '';
  }

  .header .text:first-child {
    margin-left: 0;
    padding-left: 0;
  }

  .header .text:first-child:before {
    display: none;
  }

  .contents {
    padding-top: 10px;
    border-top: 1px solid #e9e9e9;
    box-sizing: border-box;
    font-size: 10pt;
    line-height: 1.4;
  }

  .contents .ql-snow {
    border: 0 none;
  }

  .contents .ql-editor {
    padding: 0;
  }

  .contents .ql-editor pre {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
  }

  .quillWrapper {
    display: none;
  }
`

export default Read
