import styled from 'vue-styled-components'

const thumbnailProps = { thumbnail: String }

const Thumbnail = styled('div', thumbnailProps)`
  padding-top: 52.734375%;
  border-radius: 16px;
  font-size: 1px;
  line-height: 1;
  color: transparent;
  background-color: #f9f9f9;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
`

export default Thumbnail
