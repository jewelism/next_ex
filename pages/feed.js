import '../styles/feed.scss';
import FeedSection from '../components/Feed/FeedSection';

const Feed = () => {

  return (
    <div>
      <div>News Feed</div>
      <FeedSection
        filter={() => alert('filter required!')}
        headText="All Product~!"
        list={[
          {id: 1, unit: '¢', price: 11, text: 'asdfasdf111', liked: true, likeCount: 123},
          {id: 2, unit: '¢', price: 22, text: '2222asdfasd', likeCount: 1},
          {id: 3, unit: '¢', price: 33, text: 'sdf3333', likeCount: 0},
          {id: 4, unit: '¢', price: 44, text: 'dfsdf44444', likeCount: 0},
        ]}/>
      <FeedSection
        headText="Best Product"
        list={[
          {id: 1, unit: '¥', price: 1111, text: 'boseok1', liked: true, likeCount: 999},
          {id: 2, unit: '¥', price: 2222, text: 'boseok2', likeCount:888},
          {id: 3, unit: '¥', price: 3333, text: 'boseok3', likeCount: 777},
          {id: 4, unit: '¥', price: 4444, text: 'boseok4', likeCount: 666},
        ]}/>
    </div>
  );
};

export default Feed;