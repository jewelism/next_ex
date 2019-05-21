import FacebookLogin from 'react-facebook-login';

const FBLogin = ({responseFacebook}) =>
  <FacebookLogin
    appId="432178150913990"
    fields="name,email,picture,birthday"
    callback={responseFacebook}/>;

export default FBLogin;