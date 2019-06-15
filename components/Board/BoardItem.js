import {sanitize} from 'dompurify';

import TopNav from '../Nav/TopNav.js';

function BoardItem({ type, title, content }) {
  return (
    <div>
      <TopNav />
      <div>
        <div>
          {type}
          {title}
        </div>
        <div dangerouslySetInnerHTML={{__html: sanitize(content)}}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default BoardItem;