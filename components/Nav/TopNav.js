import '../../styles/menu.scss';
import TopNavBack from './TopNavBack';
import Icon from '../Icon';

const TopNav = ({left, center, right}) => {
  return(
    <div className="top-nav-container">
      <div className="top-nav-item">
        <div className="left">
          {left || <TopNavBack/>}
        </div>
      </div>
      <div className="top-nav-item">
        <div className="center">
          <Icon>logo-sample</Icon>
        </div>
      </div>
      <div className="top-nav-item">
        <div className="right">
          {right || <><Icon>btn-search</Icon><Icon>btn-cart</Icon></>}
        </div>
      </div>
    </div>
  );
};



export default TopNav;