import Like from '../Like/Like';

function FeedItem({unit = '$', price, text, liked, likeCount = 0}) {
  return (
    <div>
      <div>사진</div>
      <div>
        <span>{unit}</span><span>{price}</span>
      </div>
      <div>{text}</div>
      <div>
        <Like liked={liked}/>
        <span>{likeCount} likes</span>
      </div>
    </div>
  );
}

export default FeedItem;