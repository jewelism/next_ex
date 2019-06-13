import { useState } from 'react';
import '../styles/menu.scss';
import Icon from './Icon';
import MainMenu from './MainMenu';
import FBLogin from './Facebook/FBLogin';

const HamburgMenu = (props) => {
  const [open, setOpen] = useState(false);
  const style = {
    width: open ? '80vw' : 0,
  };
  const onClickH = () => setOpen(!open);

  return (
    <>
      <div className="hamburg-menu" style={!open ? {display: 'none'}:{}}>
        <div className="content-wrap">
          <div onClick={onClickH} className="close">
            <Icon className="icon">btn_close</Icon>
          </div>
          <div className="content">
            <FBLogin><h4>Login with Facebook</h4></FBLogin>
            <div className="quick">
              <h3>QuickMenu</h3>
              <MainMenu/>
            </div>
          </div>
        </div>
        <div onClick={onClickH} className="overlay"></div>
      </div>
      <Icon onClick={onClickH} style={open ? {display: 'none'}:{}}>btn_menu</Icon>
    </>
  );

  // return open ?
  //   <div className="hamburg-menu">
  //     <div className="content-wrap">
  //       <div onClick={onClickH} className="close">
  //         <Icon className="icon">btn_close</Icon>
  //       </div>
  //       <div className="content">
  //         <FBLogin><h4>Login with Facebook</h4></FBLogin>
  //         <div className="quick">
  //           <h3>QuickMenu</h3>
  //           <MainMenu/>
  //         </div>
  //       </div>
  //     </div>
  //     <div onClick={onClickH} className="overlay"></div>
  //   </div>
  //   :
  //   <Icon onClick={onClickH}>btn_menu</Icon>
};

export default HamburgMenu;