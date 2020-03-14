import styled, { css } from 'vue-styled-components'

const iconProps = { width: Number, height: Number, icon: String }

const iconStyles = css`
  ${(props) =>
    props.icon === 'close' &&
    css`
      background-position: -35px -35px;
    `}

  ${(props) =>
    props.icon === 'profile' &&
    css`
      background-position: -35px 0;
    `}

  ${(props) =>
    props.icon === 'logout' &&
    css`
      background-position: -105px 0;
    `}

  ${(props) =>
    props.icon === 'login' &&
    css`
      background-position: -70px 0;
    `}

  ${(props) =>
    props.icon === 'join' &&
    css`
      background-position: -105px -35px;
    `}
`

const Icon = styled('span', iconProps)`
  display: inline-block;
  overflow: hidden;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  ${iconStyles}
  background-image: url(http://localhost:3000/images/ico_global.png);
  background-repeat: no-repeat;
  background-size: 160px auto;
  vertical-align: middle;
`

export default Icon
