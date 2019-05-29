import FeedHeader from './FeedHeader';
import {Carousel} from 'react-responsive-carousel';
import Like from '../Like/Like';

function StarInfluencer({list = []}) {
  return (
    <div>
      <FeedHeader text="Star Influencer"/>
      <Carousel width="200px"
                infiniteLoop autoPlay centerMode emulateTouch
                showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}
                selectedItem={1}>

        {list.map(item =>
          <div
            key={item.id}
            style={{display: 'flex', flexFlow: 'column wrap', justifyContent: 'center', alignItems: 'center', height: '200px', backgroundColor: 'grey'}}
          >
            <div style={{width: '7rem', height: '7rem'}}><img src="/static/img/img1.jpeg" style={{width: '100%', height: '100%', objectFit: 'cover' ,borderRadius: '50%'}}/></div>
            <div>{item.name}</div>
            <div><Like liked={item.followed}/>{item.followCount}</div>
            <div onClick={() => alert(`routing to ${item.id}`)}>View more +</div>
          </div>
        )}


      </Carousel>
    </div>
  );
}

export default StarInfluencer;