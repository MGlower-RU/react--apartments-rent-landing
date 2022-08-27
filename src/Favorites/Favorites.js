import { useId, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import Slider from '../other/Slider'

import Austin from './slider/austin.png'
import Denver from './slider/denver.png'
import Dallas from './slider/dallas.png'
import Atlanta from './slider/atlanta.png'
import Birmingham from './slider/birmingham.png'

import './favorites.scss'

export default function Favorites() {
  const [citiesToShow, setCitiesToShow] = useState(24)

  const sliderData = [
    {
      id: useId(),
      img: Austin,
      city: 'Austin'
    },
    {
      id: useId(),
      img: Denver,
      city: 'Denver'
    },
    {
      id: useId(),
      img: Dallas,
      city: 'Dallas'
    },
    {
      id: useId(),
      img: Atlanta,
      city: 'Atlanta'
    },
    {
      id: useId(),
      img: Birmingham,
      city: 'Birmingham'
    },
  ]
  const cities = [
    {
      id: useId(),
      city: 'Miami',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Fort Lauderdale',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Salt Lake City',
      state: 'Utah'
    },
    {
      id: useId(),
      city: 'San Francisco',
      state: 'California'
    },
    {
      id: useId(),
      city: 'Chicago',
      state: 'Illinois'
    },
    {
      id: useId(),
      city: 'Boston',
      state: 'Massachusetts'
    },
    {
      id: useId(),
      city: 'Los Angeles',
      state: 'California'
    },
    {
      id: useId(),
      city: 'Charleston',
      state: 'South Carolina'
    },
    {
      id: useId(),
      city: 'New York',
      state: 'New York'
    },
    {
      id: useId(),
      city: 'Phoenix',
      state: 'Arizona'
    },
    {
      id: useId(),
      city: 'Las Vegas',
      state: 'Nevada'
    },
    {
      id: useId(),
      city: 'Orlando',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'St. Petersburg',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Portland',
      state: 'Oregon'
    },
    {
      id: useId(),
      city: 'Washington',
      state: 'D.C.'
    },
    {
      id: useId(),
      city: 'Baltimore',
      state: 'Maryland'
    },
    {
      id: useId(),
      city: 'Fort Worth',
      state: 'Texas'
    },
    {
      id: useId(),
      city: 'Richmond',
      state: 'Virgina'
    },
    {
      id: useId(),
      city: 'Boulder',
      state: 'Colorado'
    },
    {
      id: useId(),
      city: 'Charlotte',
      state: 'North Carolina'
    },
    {
      id: useId(),
      city: 'Philadelphia',
      state: 'Pennsylvania'
    },
    {
      id: useId(),
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      id: useId(),
      city: 'Tampa',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Nashville',
      state: 'Tennessee'
    },
    {
      id: useId(),
      city: 'Philadelphia',
      state: 'Pennsylvania'
    },
    {
      id: useId(),
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      id: useId(),
      city: 'Tampa',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Nashville',
      state: 'Tennessee'
    },
    {
      id: useId(),
      city: 'Philadelphia',
      state: 'Pennsylvania'
    },
    {
      id: useId(),
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      id: useId(),
      city: 'Tampa',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Nashville',
      state: 'Tennessee'
    },
    {
      id: useId(),
      city: 'Philadelphia',
      state: 'Pennsylvania'
    },
    {
      id: useId(),
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      id: useId(),
      city: 'Tampa',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Nashville',
      state: 'Tennessee'
    },
    {
      id: useId(),
      city: 'Philadelphia',
      state: 'Pennsylvania'
    },
    {
      id: useId(),
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      id: useId(),
      city: 'Tampa',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Nashville',
      state: 'Tennessee'
    },
    {
      id: useId(),
      city: 'Philadelphia',
      state: 'Pennsylvania'
    },
    {
      id: useId(),
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      id: useId(),
      city: 'Tampa',
      state: 'Florida'
    },
    {
      id: useId(),
      city: 'Nashville',
      state: 'Tennessee'
    },
  ]

  return (
    <div className="favorites__wrapper">
      <h2>
        See where members love to live
      </h2>
      <p>
        We offer over 80 cities, and counting, across the U.S. and encourage you to explore with our free, 7-day travel benefit.
      </p>
      <Slider gap={24}>
        {sliderData.map(({img, id, city}) => (
          <SwiperSlide key={id}>
            <div
              className="favorites__slider__item"
              style={{
                backgroundImage: `url(${img})`
              }}
            >
              <span>{city}</span>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
      <div className="favorites__beloved-cities__wrapper">
        <h3>More of our favorites cities</h3>
        <div className="favorites__beloved-cities__grid">
          {cities.slice(0, citiesToShow).map(({city, state, id}) => (
            <div
              key={id}
              className="favorites__beloved-cities__grid__item"
            >
              <div className="favorites__beloved-cities__grid__item__city">
                {city}
              </div>
              <div className="favorites__beloved-cities__grid__item__state">
                {state}
              </div>
            </div>
          ))}
        </div>
        {citiesToShow < cities.length &&
        <button
          onClick={() => setCitiesToShow(citiesToShow+24)}
        >View All Cities</button>}
      </div>
    </div>
  )
}