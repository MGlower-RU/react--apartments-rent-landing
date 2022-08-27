import { useContext, useRef } from "react";
import { Swiper } from "swiper/react";
import { MainContext } from "../general/Context";

import { ReactComponent as Arrow } from "./arrow_right.svg";

import './slider.scss'

export default function Slider({gap = 16, children}) {
  const { Scrollbar, Navigation } = useContext(MainContext)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <Swiper
      spaceBetween={gap}
      slidesPerView={'auto'}
      modules={[Navigation, Scrollbar]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current
      }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
        
        swiper.navigation.destroy()
        swiper.navigation.init()
        swiper.navigation.update()
      }}
    >
      {children}
      <div className="swiper-buttons">
        <div ref={prevRef} className='swiper-button-prev'><Arrow/></div>
        <div ref={nextRef} className='swiper-button-next'><Arrow/></div>
      </div>
    </Swiper>
  )
}