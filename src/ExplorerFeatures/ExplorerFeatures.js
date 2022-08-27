import { useId } from 'react'

import Picture from './picture.webp'
import Pig from './pig.png'
import Carpet from './carpet.png'
import Tag from './tag.png'

import './explorer-features.scss'

export default function ExplorerFeatures() {
  const features = [
    {
      img: Pig,
      title: "Best Rates",
      description: "Explorer members always get our lowest monthly rates.",
      id: useId()
    },
    {
      img: Carpet,
      title: "Ultimate Flexibility",
      description: "When you’re ready for something new, simply give a 30-day notice; there’s no lease to break or transfer fees.",
      id: useId()
    },
    {
      img: Tag,
      title: "Easy Transfers",
      description: "Seamlessly move between Landing apartments anywhere, anytime.",
      id: useId()
    },
  ]

  return (
    <div className="explorer-features__wrapper">
      <div className="explorer-features__picture">
        <img src={Picture} alt="" />
      </div>
      <div className="explorer-features__content">
        <h2>
          Get the best rates and even more freedom with Landing Explorer
        </h2>
        <div className="explorer-features__content__items">
          {features.map(({img, title, description, id}) => (
            <div
              key={id}
              className="explorer-features__content__items__feature"
            >
              <div className="explorer-features__content__items__feature__img">
                <img src={img} alt="" />
              </div>
              <div className="explorer-features__content__items__feature__text">
                <div className="explorer-features__content__items__feature__text__title">{title}</div>
                <div className="explorer-features__content__items__feature__text__description">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}