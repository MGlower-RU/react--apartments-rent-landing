import { ReactComponent as Loupe } from "./search.svg"

import Picture from './picture.png'

import './main.scss'

export default function Main() {
  return (
    <div className="main__wrapper">
      <h1>
        We're reinventing<br/>
        apartment living
      </h1>
      <p>
        Say goodbye to being trapped in a lease.<br/>
        Landing members have access to thousands<br/>
        of apartments with flexible leases.
      </p>
      <form className="main__form">
        <Input title='Location' placeholder='Where to?' />
        <Input title='Dates' placeholder='How long?' />
        <button type="submit">
          <Loupe />
          Search
        </button>
      </form>
      <div className="main__picture">
        <img src={Picture} alt="" />
      </div>
    </div>
  )
}

function Input({title, placeholder}) {
  return (
    <div className="main__input">
      <span>{title}</span>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}