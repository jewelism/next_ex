import {useState} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {saveAuthData} from '../../utils/auth';

const FBLogin = props => {
  const [loading, setLoading] = useState(false);
  const onClickLogin = (e, propsOnClick) => {
    if(!loading){
      setLoading(true);
      propsOnClick(e);
    }
  };

  const responseFacebook = response => {
    saveAuthData(response);
    setLoading(false);
    location.href = '/';
  };

  return <FacebookLogin
    appId="432178150913990"
    scope="public_profile,user_friends"
    fields="name,email,picture,birthday"
    language="ko-KR"
    callback={responseFacebook}
    render={renderProps => (
      <div onClick={e => onClickLogin(e, renderProps.onClick)}>FB Login</div>
    )}/>
};


export default FBLogin;