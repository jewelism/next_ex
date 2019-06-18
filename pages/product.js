import { useState, useEffect } from 'react';
import ImgCarousel from '../components/ImgCarousel';
import SideNav from '../components/Nav/SideNav';
import TopNav from '../components/Nav/TopNav';
import TopNavBack from '../components/Nav/TopNavBack';

import { PRODUCT_ID, INFLUENCER_ID } from '../constants/route';

import '../styles/product.scss';
import ProductLike from '../components/Switch/ProductLike';
import { findProductById } from '../api/product';

function Product({ productId, influencerId }) {
  const [productData, setProductData] = useState({});

  const getPathOnBack = () => {
    if (influencerId) {
      return `/influencer/${influencerId}`;
    }
    return '/';
  }

  const getProductName = () => 'product' + productId;

  useEffect(() => {
    findProductById(productId)
      .then(setProductData);
  }, []);

  return (
    <div>
      <TopNav left={<TopNavBack path={getPathOnBack()} />} center={getProductName()} right=" " />
      <div>productId: {productId}</div>
      <div>influencerId: {influencerId}</div>
      <h3 id="product-info">상품정보</h3>
      <ImgCarousel list={['/static/img/pic1.jpg', '/static/img/img2.jpeg', '/static/img/pic1_s.jpg']} />
      {JSON.stringify(productData)}
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
      <div className="product-core-btn-wrap">
        <div className="product-buy-btn">Buy now</div>
        <div className="product-like-btn">
          <ProductLike count={1} />
        </div>
      </div>
      <SideNav />
    </div>
  );
}

Product.getInitialProps = ({ query }) => ({ productId: query[PRODUCT_ID], influencerId: query[INFLUENCER_ID] });

export default Product;