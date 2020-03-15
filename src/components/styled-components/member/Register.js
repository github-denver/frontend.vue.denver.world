import styled, { css } from 'vue-styled-components'

const registerProps = { className: String }

const registerStyles = css`
  ${(props) => props.className === 'half' && css``}
`

const Register = styled('div', registerProps)`
  ${registerStyles}
`

export default Register
