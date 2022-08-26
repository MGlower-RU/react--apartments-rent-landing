import { useRef } from "react";
import { Swiper } from "swiper/react";

import { ReactComponent as Arrow } from "./arrow_right.svg";

import './slider.scss'

export default function Slider({gap = 16, options, isNavigation, children}) {  
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <Swiper
      spaceBetween={gap}
      slidesPerView={'auto'}
      navigation={isNavigation ? {
        prevEl: prevRef.current,
        nextEl: nextRef.current
      }: null}
      onSwiper={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
        
        swiper.navigation.destroy()
        swiper.navigation.init()
        swiper.navigation.update()
      }}
      {...options}
    >
      {children}
      {
        isNavigation &&
        <div className="swiper-buttons">
          <div ref={prevRef} className='swiper-button-prev'><Arrow/></div>
          <div ref={nextRef} className='swiper-button-next'><Arrow/></div>
        </div>
      }
    </Swiper>
  )
}