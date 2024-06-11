'use client';

import { Image, rem } from '@mantine/core';
import { Carousel, CarouselProps, CarouselSlide } from '@mantine/carousel';

import classes from './carousel.module.css';

interface SpeciesCarouselProps extends CarouselProps {
  images: string[];
}

export default function SpeciesCarousel({ images, ...rest }: SpeciesCarouselProps) {
  return (
    <Carousel
      align="start"
      slideGap={10}
      withIndicators
      height={110}
      slideSize={150}
      classNames={classes}
      controlsOffset="lg"
      {...rest}
    >
      {images.map((image) => (
        <CarouselSlide key={image}>
          <Image h="100%" src={image} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}
