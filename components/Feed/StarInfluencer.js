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
            style={{
              display: 'flex',
              flexFlow: 'column wrap',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
              // backgroundColor: `#${item.id*10}${item.id*7}${item.id*12}`,
              border: '1px solid grey',
              borderRadius: '4px'
            }}
          >
            <div style={{width: photoSize, height: photoSize}}>
              <img src="/static/img/img1.jpeg"
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     borderRadius: '50%'
                   }}/>
            </div>
            <div>{item.name}</div>
            <div><Like liked={item.followed}/>{item.followCount}</div>
            <div onClick={() => alert(`routing to ${item.id}`)}>View more +</div>
          </div>
        )}
      </Carousel>
    </>
  );
}

export default StarInfluencer;