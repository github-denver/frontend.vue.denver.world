import styled from 'vue-styled-components'

const subjectProps = { icon: String }

const Subject = styled('p', subjectProps)`
  display: block;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default Subject
