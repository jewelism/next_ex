import FeedHeader from './FeedHeader';
import FeedList from './FeedList';

function FeedSection({filter, headText, list}) {
  return (
    <div>
      <FeedHeader filter={filter} text={headText}/>
      <FeedList list={list}/>
    </div>
  );
}

export default FeedSection;