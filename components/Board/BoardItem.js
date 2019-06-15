import TopNav from '../Nav/TopNav.js';

function BoardItem({ type, title, content }) {
  return (
    <div>
      <TopNav />
      <div>
        {type}
        {title}
        {content}
      </div>
    </div>
  );
}

export default BoardItem;