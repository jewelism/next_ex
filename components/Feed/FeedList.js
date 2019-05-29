import '../../styles/feed.scss';
import FeedItem from './FeedItem';


function FeedList(props) {
  return (
    <div className="feed-list-container-m">
      {props.list.map(item =>
        <FeedItem key={item.id} {...item}/>
      )}
    </div>
  );
}

export default FeedList;