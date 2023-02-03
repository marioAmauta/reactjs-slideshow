import React from 'react';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import { ReactComponent as LeftArrow } from '../img/iconmonstr-angel-left-thin.svg';
import { ReactComponent as RightArrow } from '../img/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';

export default function Slideshow() {
  return (
    <MainContainer>
      <SlideshowContainer>
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={img1}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>15% discount on Apple products</p>
          </SlideText>
        </Slide>
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={img2}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>15% discount on Apple products</p>
          </SlideText>
        </Slide>
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={img3}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>15% discount on Apple products</p>
          </SlideText>
        </Slide>
        <Slide>
          <a
            href='https://www.falconmasters.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={img4}
              alt='slide'
            />
          </a>
          <SlideText>
            <p>15% discount on Apple products</p>
          </SlideText>
        </Slide>
      </SlideshowContainer>
      <ControlsContainer>
        <ArrowButton>
          <LeftArrow />
        </ArrowButton>
        <ArrowButton right>
          <RightArrow />
        </ArrowButton>
      </ControlsContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
`;

const SlideshowContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-hight: 500px;
  position: relative;

  img {
    width: 100%;
    vertical-align: top;
  }
`;

const SlideText = styled.div`
  background: ${({ textBackground }) => (textBackground ? textBackground : 'rgba(0, 0, 0, 0.5)')};
  color: ${({ textColor }) => (textColor ? textColor : '#fff')};
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
    background: #000;
  }
`;

const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ArrowButton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;

  &:hover {
    path {
      fill: #fff;
    }
  }

  path {
    filter: ${({ right }) => (right ? 'drop-shadow(-2px 0px 0px #fff) ' : 'drop-shadow(2px 0px 0px #fff)')};
  }

  ${({ right }) => (right ? 'right: 0' : 'left: 0')}
`;
