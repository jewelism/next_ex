import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {saveAuthData} from "../../utils/auth";

const FBLogin = props => {
  const responseFacebook = response => {
    try {
      saveAuthData(response);
      location.href = '/';
    } catch (e) {

    } finally {
      props.res && props.res(response);
    }
  };

  return <FacebookLogin
    appId="432178150913990"
    fields="name,email,picture,birthday"
    callback={responseFacebook}
    render={renderProps => (
      <div onClick={renderProps.onClick}>FB Login</div>
    )}/>
};


export default FBLogin;