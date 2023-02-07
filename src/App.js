import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React from 'react';
// import { Slideshow, Slide, SlideText } from './components/Slideshow';
import styled from 'styled-components';
import { slideData } from './carouselData';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
  return (
    <main>
      {/* <Title>Productos destacados</Title>
      <Slideshow
        controls={true}
        autoplay={true}
      >
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={slideData[0].image}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>{slideData[0].text}</p>
          </SlideText>
        </Slide>
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={slideData[1].image}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>{slideData[1].text}</p>
          </SlideText>
        </Slide>
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={slideData[2].image}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>{slideData[2].text}</p>
          </SlideText>
        </Slide>
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={slideData[3].image}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>{slideData[3].text}</p>
          </SlideText>
        </Slide>
      </Slideshow> */}

      <Title>Bootstrap Carousel</Title>
      <Carousel interval={1000}>
        {slideData.map((el, index) => {
          const indexPlusOne = index + 1;
          return (
            <Carousel.Item key={indexPlusOne}>
              <img
                src={el.image}
                alt={`slide ${indexPlusOne}`}
                className='d-block w-100'
                style={{
                  objectFit: 'fill',
                  height: '200px'
                }}
              />
              <Carousel.Caption>{el.text}</Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </main>
  );
}

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
