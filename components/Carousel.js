import React from 'react';
import {Carousel} from 'react-responsive-carousel';

const MyCarousel = props => (
  <Carousel {...props} autoPlay infiniteLoop>
    <div>
      <img src="/static/img/img1.jpeg" />
      {/*<p className="legend">Legend 1</p>*/}
    </div>
    <div>
      <img src="/static/img/img2.jpeg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="/static/img/img3.jpeg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);

export default MyCarousel;