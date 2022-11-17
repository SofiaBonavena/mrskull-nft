import React from 'react';
import Marquee from "react-easy-marquee";

const MarqueeComponent = () => {
  const images = ["https://picsum.photos/200", "https://picsum.photos/100"];

  return (
    
    <div>
      <Marquee duration={10000} background="#fafafa" height="250px">
        <h1>I go weee!</h1>

        {images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;