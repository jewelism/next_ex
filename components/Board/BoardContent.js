import { sanitize } from 'dompurify';
import { useState, useEffect } from 'react';

import TopNav from '../Nav/TopNav.js';

function BoardContent({ findBoardData, id, navCenter }) {
  const [board, setBoardData] = useState({});

  useEffect(() => {
    findBoardData(id)
      .then(setBoardData);
  }, []);

  const { title, date, content } = board;
  return (
    <div>
      <TopNav center={<div>{navCenter}</div>} />
      <div>
        <div>{id}</div>
        <div>
          <div>
            {title}
          </div>
          <div>
            {date}
          </div>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: sanitize(content) }}></div> */}
      </div>
    </div>
  );
}

export default BoardContent;