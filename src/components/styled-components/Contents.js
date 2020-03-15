import styled, { css } from 'vue-styled-components'

const contentsProps = { attribute: Object }

const contentsStyles = css`
  ${(props) =>
    props.attribute &&
    props.attribute.design === 'write' &&
    css`
      margin-top: 10px;
    `}

  ${(props) =>
    props.attribute &&
    props.attribute.design === 'library' &&
    css`
      position: relative;
      margin: 56.25% 0 0;
      background-color: #fff;
    `}
`

const Contents = styled('div', contentsProps)`
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;

  ${contentsStyles}
`

export default Contents
