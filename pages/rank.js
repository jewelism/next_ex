const Rank = () => {
  return (
    <div>
      <ul className="rank-menu">
        <li>Today</li>
        <li>Outer</li>
        <li>Top</li>
        <li>Skirt</li>
        <li>Pants</li>
        <li>Dress</li>
        <li>Shoes</li>
      </ul>
      <div className="newly-influencer">
        <div className="face"></div>
        <div className="name">real_brown</div>
        <div className="star">364</div>
      </div>
      <div className="ranking">
        <h1>Ranking</h1>
        <div>
          <div>
            <div className="face"></div>
            <div className="name-star">
              <p>real_brown</p>
              <p>498.3k</p>
            </div>
            <div className="follow">
              Following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rank;