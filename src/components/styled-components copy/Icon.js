import styled, { css } from 'vue-styled-components'

const iconProps = { width: Number, height: Number, icon: String }

const iconStyles = css`
  ${(props) =>
    props.icon === 'menu' &&
    css`
      background-position: 0 0;
    `}
`

const Icon = styled('span', iconProps)`
  display: inline-block;
  overflow: hidden;
  width: ${(props) => props.width || '30'}px;
  height: ${(props) => props.height || '30'}px;
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
