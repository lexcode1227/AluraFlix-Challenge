import React from 'react';
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import ChallengeCard from './ChallengeCard';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>Elemento 1</div>
      <div>Elemento 2</div>
      <div>Elemento 3</div>
      {/* <div>Elemento 4</div>
      <div>Elemento 5</div>
      <div>Elemento 6</div>
      <div>Elemento 7</div>
      <div>Elemento 8</div>
      <div>Elemento 9</div> */}
      {/* Agrega más elementos según tus necesidades */}
    </Slider>
  );
};

export default CardSlider;