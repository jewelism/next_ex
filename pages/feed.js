import {useState, useEffect} from 'react';
import '../styles/feed.scss';

import WithCategory from '../layouts/WithCategory';
import FeedSection from '../components/Feed/FeedSection';
import StarInfluencer from '../components/Feed/StarInfluencer';
import HamburgMenu from '../components/HamburgMenu';

import {findFeedList} from '../api';
import TopNav from '../components/TopNav';

const Feed = () => {
  const [nextPage, setNextPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const addProductList = list => {
    setNextPage(nextPage + 1);
    setProductList([...productList, ...list]);
  };

  const fetchProductListByPage = pageNum => findFeedList(pageNum)
    .then(d => {
      const list = d.map(i => ({
        id: `key${i}i`,
        unit: '¢',
        price: i * 11,
        text: 'a' + i,
        liked: i % 2,
        likeCount: i * 111
      }));
      addProductList(list);
    });

  const onClickSeeMore = () => fetchProductListByPage(nextPage);


  useEffect(() => {
    fetchProductListByPage(1);
  }, []);

  return (
    <WithCategory nav={<TopNav left={<HamburgMenu/>}/>}>
      <div className="feed-container-m for-overlay">
        <div>News Feed</div>
        <FeedSection
          headText="Best Product"
          list={[
            {id: 1, unit: '¢', price: 11, text: 'asdfasdf111', liked: true, likeCount: 123},
            {id: 2, unit: '¢', price: 22, text: '2222asdfasd', likeCount: 1},
            {id: 3, unit: '¢', price: 33, text: 'sdf3333', likeCount: 0},
            {id: 4, unit: '¢', price: 44, text: 'dfsdf44444', likeCount: 0},
          ]}/>
        <StarInfluencer list={[
          {id: 1, name: 'boseok11', followed: true, followCount: 111},
          {id: 2, name: 'boseok22', followed: true, followCount: 222},
          {id: 3, name: 'boseok33', followed: true, followCount: 333},
        ]}/>
        <FeedSection
          filter={() => alert('filter required!')}
          headText="All Product"
          list={productList}/>
        <button onClick={onClickSeeMore}>See More +</button>
      </div>
    </WithCategory>
  );
};

// Feed.getInitialProps = function (ctx) {
//   return new Promise(resolve => {
//     fetch('https://inseongj1.moqa.co.kr/1')
//       .then(res => res.json())
//       .then(data => resolve({data}))
//       .catch(err=> {
//         console.error(err)
//       });
//   });
// };

export default Feed;