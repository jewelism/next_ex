import ImgCarousel from '../components/ImgCarousel';

function Product() {
  return (
    <div>
      <div>상품정보</div>
      <ImgCarousel list={['/static/img/pic1.jpg', '/static/img/img2.jpeg', '/static/img/pic1_s.jpg']}/>
    </div>
  );
}

export default Product;