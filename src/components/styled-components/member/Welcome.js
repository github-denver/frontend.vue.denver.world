import styled, { css } from 'vue-styled-components'

const welcomeProps = { className: String }

const welcomeStyles = css`
  ${(props) => props.className === 'half' && css``}
`

const Welcome = styled('div', welcomeProps)`
  min-width: 320px;
  margin: 0 auto;
  padding: 0 10px 40px;
  box-sizing: border-box;

  h1 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }

  h1 a {
    display: inline-block;
    margin: 11px 0 0;
    padding: 6px;
    font-size: 16px;
    font-weight: 700;
  }

  .container {
    margin-top: 20px;
  }

  .title {
    display: block;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }

  .description {
    font-size: 14px;
    line-height: 1.4;
    color: #888;
    text-align: center;
  }

  .title + .description {
    margin-top: 20px;
  }

  .description + .description {
    margin-top: 10px;
  }

  .provider {
    position: relative;
    font-weight: 700;
  }

  .provider:before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    content: '';
  }

  .kakao {
    color: #333;
  }

  .kakao:before {
    background-color: #fee500;
  }

  .wrap_welcome .group_button {
    margin-top: 40px;
  }

  .wrap_welcome .emphasis_error + .group_button {
    margin-top: 13px;
  }

  .profile {
    margin-top: 20px;
    padding: 0;
    text-align: center;
  }

  .inner {
    display: inline-block;
    position: relative;
  }

  .wrap_welcome .group_field {
    width: 100%;
    margin-top: 20px;
  }

  .wrap_welcome .field_global {
    display: block;
    margin-top: 10px;
  }

  .wrap_welcome .box_result {
    margin-top: 10px;
  }

  .wrap_welcome .text_result {
    font-size: 14px;
  }

  .wrap_welcome .emphasis_error {
    margin-top: 13px;
    text-align: center;
  }

  .wrap_welcome .box_picture {
    position: absolute;
    right: 0;
    bottom: 0;
    border: 1px solid #e9e9e9;
    border-radius: 100%;
    font-size: 1px;
    line-height: 0;
    color: transparent;
    background-color: #fff;
  }

  .wrap_welcome .box_picture .label_picture {
    display: block;
    width: 30px;
    height: 30px;
  }

  .wrap_welcome .box_picture .label_picture .ico_picture {
    width: 30px;
    height: 30px;
    background-position: -70px -35px;
  }

  .wrap_welcome .box_picture .field_picture {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 1px;
    height: 1px;
  }

  ${welcomeStyles}
`

export default Welcome
