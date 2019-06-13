import Router from 'next/router';

function TopNavBack() {
  function onClickBack() {
    // if (window.history.length > 2) {
    //   window.history.back();
    //   return;
    // }
    Router.replace('/');
  }

  return (
    <div onClick={onClickBack}>Back</div>
  );
}

export default TopNavBack;