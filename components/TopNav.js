import '../styles/menu.scss';
import TopNavBack from './Nav/TopNavBack';

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
          S
        </div>
      </div>
      <div className="top-nav-item">
        <div className="right">
          {right || <div>Search</div>}
        </div>
      </div>
    </div>
  );
};



export default TopNav;