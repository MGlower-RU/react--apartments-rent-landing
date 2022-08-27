import { useId } from 'react'

import { ReactComponent as Star } from './star.svg'
import { ReactComponent as Tag } from './tag.svg'

import WSJ from './wsg.webp'
import Forbes from './forbes.webp'
import Bloomberg from './bloomberg.webp'
import Yahoo from './yahoo.webp'
import ChicagoTribune from './chicago_tribune.webp'
import Curbed from './curbed.webp'

import './reviews.scss'

export default function Reviews() {
  const reviews = [
    {
      rating: 3,
      author: 'Waseem A.',
      location: 'Fort Lauderdale, FL',
      text: 'Even on the conservative side, apartment buildings expect a three-month minimum (lease)... If they do offer month-to-month, it’s often as much as twice the rental price, and it’s incredibly annoying to furnish a place if you’re only going to live there for a month.',
      id: useId()
    },
    {
      rating: 5,
      author: 'Michael H.',
      location: 'Tampa, FL',
      text: 'Landing’s apartments have everything under the sun. When we arrived, we brought things that we thought Landing wouldn’t know we needed. But they had it – so now we have two of everything',
      id: useId()
    },
    {
      rating: 4,
      author: 'Daniel O.',
      location: 'Fort LauderdaleNashville, TN',
      text: 'The biggest perk is the flexibility, the fact that if I want to live anywhere from Nashville to Seattle, Austin to New York City, I have a way to do it. Landing makes the world accessible in a way that it wasn’t before.',
      id: useId()
    },
  ]

  const companies = [
    WSJ, Forbes, Bloomberg, Yahoo, ChicagoTribune, Curbed
  ]

  return (
    <div className="reviews__wrapper">
      <span><Tag/></span>
      <h2>
        See what our members<br/>
        have to say
      </h2>
      <div className="reviews__items">
        {reviews.map(({rating, author, location, text, id}) => (
          <div
            key={id}
            className="reviews__items__review"
          >
            <div className="reviews__items__review__rating">
              {Array.apply(null, Array(5)).map((_, i) => {
                return (
                  <RatingStar key={i} i={i+1} rating={rating} />
                )
              })}
            </div>
            <div className="reviews__items__review__author">
              {author}
            </div>
            <div className="reviews__items__review__location">
              {location}
            </div>
            <div className="reviews__items__review__text">
              {text}
            </div>
          </div>
        ))}
      </div>
      <div className="reviews__companies">
        {companies.map((el, i) => (
          <div key={i} className="reviews__companies__item">
            <img src={el} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

function RatingStar({i, rating}) {
  return (
    <div
      className={`reviews__items__review__rating__star${rating/i >= 1 ? ' reviews__items__review__rating__star--active' : ''}`}
    >
      <Star />
    </div>
  )
}