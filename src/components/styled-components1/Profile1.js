import styled from 'vue-styled-components'

const Profile = styled.div`
  &:first-child {
    border-top: 0 none;
  }

  display: table;
  width: 100%;
  padding: 10px 50px 10px 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  box-sizing: border-box;
  background-color: #fff;
  text-align: left;

  & > a {
    display: block;
    font-size: 0;
  }

  & > a > span {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    vertical-align: middle;
  }
`

export default Profile
