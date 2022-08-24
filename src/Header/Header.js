import { useId } from 'react'
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as Arrow } from './arrow.svg'

import './header.scss'

export default function Header() {
  const menu = [
    {
      name: 'Why Landing',
      id: useId(),
      subMenu: [
        {
          name: 'Features',
          id: useId(),
        }
      ]
    },
    {
      name: 'Resources',
      id: useId(),
      subMenu: [
        {
          name: 'Contacts',
          id: useId(),
        }
      ]
    },
  ]

  return (
    <header>
      <div className="header__wrapper">
        <div className="header__logo">
          <Logo />
        </div>
        <nav className="header__nav">
          {menu.map(({name, id, subMenu}) => (
            <div key={id} className="header__nav__item">
              <button>
                {name}
                <Arrow />
              </button>
              <ul>
                {subMenu.map(({name, id}) => (
                  <li key={id}>
                    <a href="/">{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <a href='/' className="header__login">
          Sign In
        </a>
      </div>
    </header>
  )
}