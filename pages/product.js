import Router from 'next/router';
import ImgCarousel from '../components/ImgCarousel';
import SideNav from '../components/SideNav';
import '../styles/product.scss';
import TopNav from '../components/TopNav';

function Product({pid, iid}) {
  const onClickBack = () => {
    if(iid){
      Router.push(`/influencer/${iid}`);
      return;
    }
    Router.push('/');
  }
  return (
    <div>
        <TopNav
          left={<div onClick={onClickBack}>Back</div>}
          />
        <div>pid: {pid}</div>
        <div>iid: {iid}</div>
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
  const {pid, iid} = query;
  return {iid, pid};
};

export default Product;