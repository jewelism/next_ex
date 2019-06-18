import Router from 'next/router';
import Icon from '../Icon';

function TopNavBack() {
  function onClickBack() {
    if (window.history.length > 2) {
      window.history.back();
      return;
    }
    Router.replace('/');
  }

  return (
    <Icon onClick={onClickBack}>btn_arrow_left</Icon>
  );
}

export default TopNavBack;