import styled, { css } from 'vue-styled-components'

const pictureProps = { attribute: Object }
console.log('pictureProps: ', pictureProps)

const pictureStyles = css`
  ${(props) =>
    props.attribute.className === 'register' &&
    css`
      width: 100px;
      height: 100px;
    `}
`

const Picture = styled('div', pictureProps)`
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

  ${pictureStyles}
`

export default Picture
