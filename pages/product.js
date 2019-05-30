import Carousel from '../components/Carousel';

function Product() {
  return (
    <div>
      <div>상품정보</div>
      <Carousel photoSize="100%" imgList={['/static/img/pic1.jpg', '/static/img/img2.jpeg', '/static/img/pic1_s.jpg']}/>
    </div>
  );
}

export default Product;