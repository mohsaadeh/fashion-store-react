import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';



const ImageSlider = () => {
    const sliderItems = [
      {
        image: 'img/logo192.png',
        title: 'Slide 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        buttonLabel: 'Button 1',
        buttonLink: '#'
      },
      {
        image: 'img/logo192.png',
        title: 'Slide 2',
        text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttonLabel: 'Button 2',
        buttonLink: '#'
      },
      {
        image: 'img/logo192.png',
        title: 'Slide 3',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonLabel: 'Button 3',
        buttonLink: '#'
      }
    ];
  
    return (
      <Carousel>
        {sliderItems.map((item, index) => (
          <CarouselItem key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.buttonLink} className="btn btn-primary">{item.buttonLabel}</a>
            </Carousel.Caption>
          </CarouselItem>
        ))}
      </Carousel>
    );
  };
  
  export default ImageSlider;