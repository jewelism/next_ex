import '../styles/index.scss';

const TopNav = ({left, center, right}) => {
  return(
    <div className="top-nav-container">
      {left || <div>H</div>}
      <div>S</div>
      {right || <div>Search</div>}
    </div>
  );
};

export default TopNav;