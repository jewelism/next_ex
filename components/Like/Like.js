import {useState} from 'react';

function Like({liked = false, onClick}) {
  const [like, setLike] = useState(liked);
  const onClickLike = () => {
    setLike(!like);
    onClick && onClick();
  };

  return (
    <span onClick={onClickLike}>{like ? '♥' : '♡'}</span>
  );
}

export default Like;