import {useState} from 'react';

const FBFollowing = () => {
  const [fields, setField] = useState({});
  window.FB.api(
    '/me',
    'GET',
    {"fields": "id,name"},
    function (response) {
      setField(response);
    }
  );

  return (<div>{JSON.stringify(fields)}</div>);
};

export default FBFollowing;