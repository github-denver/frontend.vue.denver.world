import styled from 'vue-styled-components'

const Visual = styled.div`
  overflow: hidden;
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
  padding-top: 56.25%;

  .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  img {
    width: 100%;
  }
`

export default Visual
