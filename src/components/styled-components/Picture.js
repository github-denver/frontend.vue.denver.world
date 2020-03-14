import styled from 'vue-styled-components'

const Picture = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  vertical-align: middle;

  & > img {
    width: 100%;
    height: 100%;
  }
`

export default Picture
