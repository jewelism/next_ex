import {useState} from 'react';
import '../styles/index.scss';

const HamburgMenu = (props) => {
  const [open, setOpen] = useState(false);
  const style = {
    width: open ? '80vw' : 0,
  };
  const onClickH = () => setOpen(!open);
  return open ?
    <div onClick={onClickH} className="hamburg-menu">
      <div>menu1...</div>
      <div>menu1...</div>
      <div>menu1...</div>
      <div>menu1...</div>
      <div>menu1...</div>
      <div>menu1...</div>
    </div>
    :
    <div onClick={onClickH}>H click to open</div>
};

export default HamburgMenu;