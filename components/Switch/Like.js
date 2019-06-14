import {useState} from 'react';
import Icon from '../Icon';

import '../../styles/index.scss';

function Like({liked = false, onClick, isFollow, ...props}) {
  const [like, setLike] = useState(liked);
  const onClickLike = () => {
    setLike(!like);
    onClick && onClick();
  };
  const icon = isFollow ? like ? 'icon-follow-on' : 'icon-follow-off' : like ? 'icon-heart-on' : 'icon-heart-off';
  return (
    <Icon onClick={onClickLike} className="common-like-icon" {...props}>{icon}</Icon>
  );
}

export default Like;