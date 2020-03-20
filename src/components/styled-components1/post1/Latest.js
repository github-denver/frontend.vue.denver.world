import styled from 'vue-styled-components'

const Latest = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e9e9e9;

  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: 0 none;
  }

  .list {
    margin-top: 10px;
  }

  li + li {
    margin-top: 10px;
  }

  .router-link {
    overflow: hidden;
    display: inline-block;
    max-width: 100%;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export default Latest
