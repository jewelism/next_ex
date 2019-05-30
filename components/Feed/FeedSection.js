import FeedHeader from './FeedHeader';
import FeedList from './FeedList';

function FeedSection({filter, headText, list}) {
  return (
    <>
      <FeedHeader filter={filter} text={headText}/>
      <FeedList list={list}/>
    </>
  );
}

export default FeedSection;