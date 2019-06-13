import {useState} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {isAuthed, saveAuthData, logout} from '../../utils/auth';

const FBLogin = props => {
  const [loading, setLoading] = useState(false);
  const onClickLogin = (e, propsOnClick) => {
    if (!loading) {
      sessionStorage.setItem('search', location.href);
      setLoading(true);
      propsOnClick(e);
    }
  };

  const responseFacebook = response => {
    saveAuthData(response);
    setLoading(false);
    window.history.replaceState('', '', sessionStorage.getItem('search'));
  };

  return isAuthed() ? <div role="button" onClick={logout}>Log Out</div> :
    <FacebookLogin
      appId="432178150913990"
      scope="public_profile,user_friends"
      fields="name,email,picture,birthday"
      language="ko-KR"
      isDisabled={loading}
      callback={responseFacebook}
      render={renderProps => (
        <div role="button" onClick={e => onClickLogin(e, renderProps.onClick)}>{props.children}</div>
      )}
      cookie/>
};


export default FBLogin;