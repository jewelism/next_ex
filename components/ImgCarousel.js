import AliceCarousel from 'react-alice-carousel';
import '../styles/carousel.scss';

function ImgCarousel({list = [], carouselProps = {}, stagePadding = 0}) {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <AliceCarousel
      mouseDragEnabled
      buttonsDisabled
      stagePadding={{
        paddingLeft: stagePadding,
        paddingRight: stagePadding
      }}
      {...carouselProps}
    >
      {list.map((img, index) =>
        <div key={img + index} onDragStart={handleOnDragStart} className="carousel-wrap-common">
          <img src={img} className="img-carousel-img"/>
        </div>
      )}
    </AliceCarousel>
  );
}

export default ImgCarousel;