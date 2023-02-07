import React, { useRef, useEffect, useCallback } from 'react';
import { ReactComponent as LeftArrow } from '../img/iconmonstr-angel-left-thin.svg';
import { ReactComponent as RightArrow } from '../img/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';

function Slideshow({ children, controls = false, autoplay = false, slideAnimationSpeed = 1000, intervalTime = 2000 }) {
  const slideshowContainerRef = useRef(null);
  const slideshowInterval = useRef(null);

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
        slideshowContainerRef.current.style.transition = `${slideAnimationSpeed}ms ease-out all`;
        slideshowContainerRef.current.style.transform = `translateX(0px)`;
      }, 30);
    }
  }

  const next = useCallback(() => {
    if (slideshowContainerRef.current.children.length > 0) {
      console.log('next');

      const firstElement = slideshowContainerRef.current.children[0];

      slideshowContainerRef.current.style.transition = `${slideAnimationSpeed}ms ease-out all`;

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
  }, [slideAnimationSpeed]);

  useEffect(() => {
    if (autoplay) {
      slideshowInterval.current = setInterval(() => {
        next();
      }, intervalTime);

      slideshowContainerRef.current.addEventListener('mouseenter', () => {
        clearInterval(slideshowInterval.current);
      });

      slideshowContainerRef.current.addEventListener('mouseleave', () => {
        slideshowInterval.current = setInterval(() => {
          next();
        }, intervalTime);
      });
    }
  }, [autoplay, intervalTime, next]);

  return (
    <MainContainer>
      <SlideshowContainer ref={slideshowContainerRef}>{children}</SlideshowContainer>
      {controls && (
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
      )}
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

export { Slideshow, Slide, SlideText };
