import React, { useRef } from 'react';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import { ReactComponent as LeftArrow } from '../img/iconmonstr-angel-left-thin.svg';
import { ReactComponent as RightArrow } from '../img/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';

export default function Slideshow() {
  const slideshowContainerRef = useRef(null);

  function previous() {
    if (slideshowContainerRef.current.children.length > 0) {
      console.log('previous');

      const index = slideshowContainerRef.current.children.length - 1;
      const lastElement = slideshowContainerRef.current.children[index];

      slideshowContainerRef.current.insertBefore(lastElement, slideshowContainerRef.current.firstChild);

      slideshowContainerRef.current.style.transition = 'none';

      const slideSize = slideshowContainerRef.current.children[0].offsetWidth;

      slideshowContainerRef.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshowContainerRef.current.style.transition = '500ms ease-out all';
        slideshowContainerRef.current.style.transform = `translateX(0px)`;
      }, 30);
    }
  }

  function next() {
    if (slideshowContainerRef.current.children.length > 0) {
      console.log('next');

      const firstElement = slideshowContainerRef.current.children[0];

      slideshowContainerRef.current.style.transition = `500ms ease-out all`;

      const slideSize = slideshowContainerRef.current.children[0].offsetWidth;

      slideshowContainerRef.current.style.transform = `translateX(-${slideSize}px)`;

      function transitionReset() {
        slideshowContainerRef.current.style.transition = 'none';
        slideshowContainerRef.current.style.transform = 'translateX(0)';

        slideshowContainerRef.current.appendChild(firstElement);
        slideshowContainerRef.current.removeEventListener('transitionend', transitionReset);
      }

      slideshowContainerRef.current.addEventListener('transitionend', transitionReset);
    }
  }

  return (
    <MainContainer>
      <SlideshowContainer ref={slideshowContainerRef}>
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
        <ArrowButton onClick={previous}>
          <LeftArrow />
        </ArrowButton>
        <ArrowButton
          right
          onClick={next}
        >
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
