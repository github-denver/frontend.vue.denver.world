import styled, { css } from 'vue-styled-components'

const uploadProps = { className: String }

const uploadStyles = css`
  ${(props) => props.className === 'picture' && css``}
`

const Upload = styled('div', uploadProps)`
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid #e9e9e9;
  border-radius: 100%;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background-color: #fff;

  label {
    display: block;
    width: 30px;
    height: 30px;
  }

  .icon {
    width: 30px;
    height: 30px;
    background-position: -70px -35px;
  }

  input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 1px;
    height: 1px;
  }

  ${uploadStyles}
`

export default Upload
