import cn from "classnames";
import React from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import styles from "./Carousel.module.scss";
import ArrowLeft from "components/Icons/ArrowLeft";
import ArrowRight from "components/Icons/ArrowRight";

type CarouselProps = {
  images: string[],
  className?: string
}

export default function Carousel({ images, className }: CarouselProps) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    items: images.map((image, i) => {
      return {
        id: `item - ${i}`,
        renderItem: (<img src={image} className={className} />)
      }
    })
  })
  return (
    <div className={cn(styles.carousel)}>
      <ArrowLeft onClick={slideToPrevItem} className={cn(styles.carouselButtonPrev, styles.carouselButton)} />
      <div>{carouselFragment}</div>
      <ArrowRight onClick={slideToNextItem} className={cn(styles.carouselButtonNext, styles.carouselButton)} />
    </div>
  )
}
