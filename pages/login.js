import {useState} from 'react';
import FBLogin from "../components/Facebook/FBLogin";

function Login() {
  const [FBRes, setFBRes] = useState({picture: {}});
  const responseFacebook = res => {
    setFBRes(res);
  };
  const getProfileImage = fbRes => fbRes.picture && fbRes.picture.data && fbRes.picture.data.url;

  return (
    <div>
      <h1>Login Page</h1>
      <FBLogin res={responseFacebook}/>

      <div>이름 : {FBRes.name}</div>
      <div>이메일 : {FBRes.email}</div>
      <img src={getProfileImage(FBRes)}/>
      <div>
        {JSON.stringify(FBRes)}
      </div>
    </div>
  )
}

Login.getInitialProps = async ctx => {
  return {};
};

export default Login;