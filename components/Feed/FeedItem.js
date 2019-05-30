import Like from '../Like/Like';

function FeedItem({unit = '$', price, text, liked, likeCount = 0}) {
  return (
    <div>
      <div style={{width: '100%', height: '100%'}}>
        <img src="/static/img/img1.jpeg"
             style={{
               width: '100%',
               height: '100%',
               objectFit: 'cover',
             }}/>
      </div>
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