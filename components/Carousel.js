import React from 'react';
import {Carousel} from 'react-responsive-carousel';

const MyCarousel = props => (
  <Carousel {...props} infiniteLoop dynamicHeight>
    {props.list.map((item, index) =>
      <div key={item + index}>
        <img src={item}/>
        <p className="legend">{index}</p>
      </div>
    )}
  </Carousel>
);

export default MyCarousel;