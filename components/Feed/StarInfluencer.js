import Router from 'next/router';
import Carousel from 'react-alice-carousel';

import FeedHeader from './FeedHeader';
import Like from '../Like/Like';

import '../../styles/carousel.scss';

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
              <div><Like liked={item.followed} isFollow/>{item.followCount}</div>
              <div onClick={() => Router.push(`/influencer/${item.id}`)}>View more +</div>
            </div>
          </div>
        )}
      </Carousel>
    </>
  );
}

export default StarInfluencer;