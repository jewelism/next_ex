import {useState} from 'react';

// import '../../styles/index.scss';

function Follow({followed = false, onClick, ...props}) {
  const [follow, setFollow] = useState(followed);
  const onClick = () => {
    setFollow(!follow);
    onClick && onClick();
  };
  const text = follow ? 'Following' : 'Follow';
  return (
    <div onClick={onClick} {...props}>{text}</div>
  );
}

export default Follow;