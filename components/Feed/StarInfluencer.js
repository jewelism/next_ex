import FeedHeader from './FeedHeader';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Like from '../Like/Like';

function StarInfluencer({list = []}) {
  const handleOnDragStart = e => e.preventDefault();
  const stagePadding = 20;
  const photoSize = '7rem';
  return (
    <>
      <FeedHeader text="Star Influencer"/>
      <Carousel
        mouseDragEnabled
        buttonsDisabled
        dotsDisabled
        stagePadding={{
          paddingLeft: stagePadding,
          paddingRight: stagePadding
        }}
      >
        {list.map(item =>
          <div
            key={item.id}
            onDragStart={handleOnDragStart}
            className="carousel-wrap-common carousel-item-wrap">
            <div className="carousel-wrap-common carousel-item">
              <div style={{width: photoSize, height: photoSize}}>
                <img src="/static/img/img1.jpeg" className="carousel-circle-img"/>
              </div>
              <div>{item.name}</div>
              <div><Like liked={item.followed}/>{item.followCount}</div>
              <div onClick={() => alert(`routing to ${item.id}`)}>View more +</div>
            </div>
          </div>
        )}
      </Carousel>
    </>
  );
}

export default StarInfluencer;