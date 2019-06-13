import Router from 'next/router';
import Like from '../Like/Like';

function FeedItem({id, unit = '$', price, text, liked, likeCount = 0}) {
  const onClickItem = () => Router.push(`/product/${id}`);

  return (
    <div>
      <div role="button" onClick={onClickItem}>
        <div style={{width: '100%', height: '100%'}}>
          <img src="/static/img/img1.jpeg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}/>
        </div>
        <span>{unit}</span><span>{price}</span>
        <div>{text}</div>
      </div>
      <Like liked={liked}/>
      <span>{likeCount} likes</span>
    </div>
  );
}

export default FeedItem;