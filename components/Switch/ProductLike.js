import { useState } from 'react';
import Icon from '../Icon';

import '../../styles/index.scss';
import { numberToKilo } from '../../utils/number';

function ProductLike({ count, liked = false, onClick, isFollow, ...props }) {
  const [like, setLike] = useState(liked);
  const [cnt, setCnt] = useState(count);
  const onClickLike = () => {
    setLike(!like);
    if (like) {
      setCnt(cnt - 1);
    } else {
      setCnt(cnt + 1);
    }
    onClick && onClick();
  };
  const icon = like ? 'icon-heart-on' : 'icon-heart-off';
  return (
    <div onClick={onClickLike}>
      <Icon className="common-like-icon" {...props}>{icon}</Icon>
      {numberToKilo(cnt)}
    </div>
  );
}

export default ProductLike;