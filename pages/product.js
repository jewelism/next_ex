import ImgCarousel from '../components/ImgCarousel';
import SideNav from '../components/SideNav';
import '../styles/product.scss';
import TopNav from '../components/TopNav';

function Product({query}) {
  return (
    <div>
        <TopNav/>
        <div>

        {query}
        </div>
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

Product.getInitialProps = function ({query}) {
  console.log('!!', query);
  return {query};
};

export default Product;