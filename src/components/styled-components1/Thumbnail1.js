import styled from 'vue-styled-components'

const ThumbnailProps = { paddingTop: String }

const Thumbnail = styled('div', ThumbnailProps)`
  padding-top: ${(props) => props.paddingTop};
  border-radius: 16px;
  font-size: 1px;
  font-size: 0.1rem;
  line-height: 1;
  color: transparent;
  background-color: #f9f9f9;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
`

export default Thumbnail
