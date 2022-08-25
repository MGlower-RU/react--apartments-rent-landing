import { useId } from "react"

import { ReactComponent as Bird } from './bird.svg'
import { ReactComponent as Scooter } from './scooter.svg'
import { ReactComponent as Pig } from './pig.svg'
import { ReactComponent as Tag } from './tag.svg'
import { ReactComponent as Crab } from './crab.svg'
import { ReactComponent as Hands } from './hands.svg'
import { ReactComponent as Arrow } from './arrow.svg'

import './membership.scss'

export default function Membership() {
  const features = [
    {
      title: 'Lease how you want',
      description: "Stay between one and 12+ months with the ability to transfer to other homes in the Landing network.",
      Img: Bird,
      id: useId()
    },
    {
      title: 'Bounce around or stay put',
      description: "We're always expanding our network to give you the best selection and options.",
      Img: Scooter,
      id: useId()
    },
    {
      title: 'Keep cash in your pocket',
      description: "No application fees or security deposit.",
      Img: Pig,
      id: useId()
    },
    {
      title: 'Enjoy guaranteed peace of mind',
      description: "If you’re not completely satisfied in your first week, we’ll make it right.",
      learnMore: 'Learn More',
      Img: Tag,
      id: useId()
    },
    {
      title: 'Get up to 7 free travel days',
      description: "Stay with Landing on your next trip. Get up to 7 free days every year.",
      learnMore: 'Learn More',
      Img: Crab,
      id: useId()
    },
    {
      title: 'Rest easy with 24/7 member support',
      description: "Questions can come up anytime, so we’re always available to help.",
      Img: Hands,
      id: useId()
    },
  ]

  return (
    <div className="membership__wrapper">
      <h2>
        Unlock life with your<br/>
        <b>Landing Membership</b>
      </h2>
      <a
        href="/"
        className="memberhip__more-link"
      >Learn more<Arrow /></a>
      <div className="memberhip__price">$199 Annual Membership</div>
      <div className="membership__features">
        {features.map(({id, title, description, Img, learnMore}) => (
          <div
            key={id}
            className="membership__features__item"
          >
            <div className="membership__features__item__img">
              <Img/>
            </div>
            <div className="membership__features__item__title">
              {title}
            </div>
            <div className="membership__features__item__description">
              {description}
              <a href="/" className="membership__more-link">
                {learnMore}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}