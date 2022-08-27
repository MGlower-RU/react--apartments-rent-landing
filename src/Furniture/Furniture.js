import { useId } from "react"
import { SwiperSlide } from 'swiper/react'

import Slider from "../other/Slider"

import FurnitureIncludes1 from './furniture_includes/1.webp'
import FurnitureIncludes2 from './furniture_includes/2.webp'
import FurnitureIncludes3 from './furniture_includes/3.webp'
import FurnitureIncludes4 from './furniture_includes/4.webp'
import FurnitureIncludes5 from './furniture_includes/5.webp'
import FurnitureIncludes6 from './furniture_includes/6.webp'
import FurnitureIncludes7 from './furniture_includes/7.webp'
import FurnitureIncludes8 from './furniture_includes/8.webp'
import Bed from './furniture_slider/bed.webp'
import Sofa from './furniture_slider/sofa.webp'

import { ReactComponent as Chair } from "./chair.svg"
import { ReactComponent as Pin } from "./furniture_slider/pin.svg"

import './furniture.scss'

export default function Furniture() {
  const sliderData = [
    {
      img: Bed,
      location: 'Grand Flats, Saint Louis',
      id: useId(),
    },
    {
      img: Sofa,
      location: 'Chicago, Aurelien',
      id: useId(),
    },
    {
      img: Bed,
      location: 'Grand Flats, Saint Louis',
      id: useId(),
    },
    {
      img: Sofa,
      location: 'Chicago, Aurelien',
      id: useId(),
    },
    {
      img: Bed,
      location: 'Grand Flats, Saint Louis',
      id: useId(),
    },
    {
      img: Sofa,
      location: 'Chicago, Aurelien',
      id: useId(),
    },
  ]
  const furnitureIncludes = [
    {
      id: useId(),
      title: 'Comfy, in-house designed furnishings',
      img: FurnitureIncludes1
    },
    {
      id: useId(),
      title: 'Luxury mattress and linens',
      img: FurnitureIncludes2
    },
    {
      id: useId(),
      title: 'A fully-equipped kitchen',
      img: FurnitureIncludes3
    },
    {
      id: useId(),
      title: 'Dedicated workspaces',
      img: FurnitureIncludes4
    },
    {
      id: useId(),
      title: 'Smart TV + Wifi',
      img: FurnitureIncludes5
    },
    {
      id: useId(),
      title: 'Premium toiletries',
      img: FurnitureIncludes6
    },
    {
      id: useId(),
      title: 'Plenty of storage',
      img: FurnitureIncludes7
    },
    {
      id: useId(),
      title: 'Thoughtful finishing touches',
      img: FurnitureIncludes8
    },
  ]

  return (
    <div className="furniture__wrapper">
      <div className="furniture__image"><Chair/></div>
      <span>
        Landing Furnished
      </span>
      <h1>
        Enjoy all the amenities of a fully<br/>
        furnished Landing home
      </h1>
      <Slider>
        {sliderData.map(({img, id, location}) => (
          <SwiperSlide key={id}>
            <div
              className="furniture__slider__item"
              style={{
                backgroundImage: `url(${img})`
              }}
            >
              <span><Pin/>{location}</span>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
      <span>
        Every Landing includes
      </span>
      <div className="furniture__grid">
        {furnitureIncludes.map(({id, title, img}) => (
          <div key={id} className="furniture__grid__item">
            <div className="furniture__grid__item__img">
              <img src={img} alt="" />
            </div>
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}