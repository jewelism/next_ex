// import fetch from 'isomorphic-unfetch';
import {useState} from 'react';
import FBLogin from "../components/Facebook/FBLogin";

function Login() {
  const [FBRes, setFBRes] = useState({picture: {}});
  const responseFacebook = res => {
    setFBRes(res);
    console.log(res);
  };
  const getProfileImage = fbRes => fbRes.picture.data && fbRes.picture.data.url;

  return (
    <div>
      <h1>Login Page</h1>
      <FBLogin responseFacebook={responseFacebook}/>
      <div>이름 : {FBRes.name}</div>
      <div>이메일 : {FBRes.email}</div>
      <img src={getProfileImage(FBRes)}/>
      <div>이메일 : {FBRes.email}</div>
      <div>
        {JSON.stringify(FBRes)}
      </div>
    </div>
  )
}

Login.getInitialProps = async context => {
  // const { id } = context.query
  // const res = await fetch(`https://api.tvmaze.com/shows/975`)
  // const show = await res.json()
  //
  // console.log(`Fetched show: ${show.name}`)

  return {};
};

export default Login;