import FacebookLogin from 'react-facebook-login';

const FBLogin = ({responseFacebook}) => {

  return (<FacebookLogin
    appId="432178150913990"
    fields="name,email,picture"
    callback={responseFacebook}
    autoLoad
  />);
};

export default FBLogin;