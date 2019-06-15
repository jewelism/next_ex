import Router from 'next/router';
import ImgCarousel from '../components/ImgCarousel';
import SideNav from '../components/Nav/SideNav';
import TopNav from '../components/Nav/TopNav';

import {PRODUCT_ID, INFLUENCER_ID} from '../constants/route';

import '../styles/product.scss';

function Product({productId, influencerId}) {

  const onClickBack = () => {
    if (influencerId) {
      Router.push(`/influencer/${influencerId}`);
      return;
    }
    Router.push('/');
  }
  return (

    <div>
      <TopNav
        left={<div onClick={onClickBack}>Back</div>}
      />
      <div>productId: {productId}</div>
      <div>influencerId: {influencerId}</div>
      <h3 id="product-info">상품정보</h3>
      <ImgCarousel list={['/static/img/pic1.jpg', '/static/img/img2.jpeg', '/static/img/pic1_s.jpg']}/>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <h3 id="product-size">
        사이즈
      </h3>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>

      <h3 id="product-qna">
        Q & A
      </h3>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <SideNav/>
    </div>
  );
}

Product.getInitialProps = ({query}) => ({productId: query[PRODUCT_ID], influencerId: query[INFLUENCER_ID]});

export default Product;