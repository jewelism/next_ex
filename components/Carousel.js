import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/carousel.scss';

function Carousel({imgList = [], carouselProps = {}, stagePadding = 0, photoSize = '300px'}) {
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
      {imgList.map((img, index) =>
        <div
          key={img+index}
          onDragStart={handleOnDragStart}
          style={{
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={img}
               style={{
                 width: '100%',
                 objectFit: 'contain',
               }}/>
        </div>
      )}
    </AliceCarousel>
  );
}

export default Carousel;