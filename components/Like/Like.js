import {useState} from 'react';

function Like({liked = false, onClick, isFollow}) {
  const [like, setLike] = useState(liked);
  const onClickLike = () => {
    setLike(!like);
    onClick && onClick();
  };
  const icon = isFollow ? like ? '★' : '☆' : like ? '♥' : '♡';
  return (
    <span onClick={onClickLike}>{icon}</span>
  );
}

export default Like;