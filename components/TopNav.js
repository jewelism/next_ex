import '../styles/index.scss';
import TopNavBack from './Nav/TopNavBack';

const TopNav = ({left, center, right}) => {
  return(
    <div className="top-nav-container">
      {left || <TopNavBack/>}
      <div>S</div>
      {right || <div>Search</div>}
    </div>
  );
};

export default TopNav;