import { useId } from 'react'

import { ReactComponent as Twitter } from './twitter.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Facebook } from './facebook.svg'

import './footer.scss'

export default function Footer() {
  const menu = [
    {
      name: 'Cities',
      id: useId(),
      list: [
        {
          name: 'Austin',
          link: 'austin',
          id: useId()
        },
        {
          name: 'Birmingham',
          link: 'birmingham',
          id: useId()
        },
        {
          name: 'Boston',
          link: 'boston',
          id: useId()
        },
        {
          name: 'Chicago',
          link: 'chicago',
          id: useId()
        },
        {
          name: 'Dallas',
          link: 'dallas',
          id: useId()
        },
      ]
    },
    {
      name: 'Landing',
      id: useId(),
      list: [
        {
          name: 'Member benefits',
          link: 'member-benefits',
          id: useId()
        },
        {
          name: 'Blog',
          link: 'blog',
          id: useId()
        },
        {
          name: 'About',
          link: 'about',
          id: useId()
        },
        {
          name: 'Refer a Friend',
          link: 'referral',
          id: useId()
        },
        {
          name: 'Become a Host',
          link: 'hosting',
          id: useId()
        },
        {
          name: 'Become a Partner',
          link: 'partnership',
          id: useId()
        },
        {
          name: 'Careers',
          link: 'careers',
          id: useId()
        },
      ]
    },
    {
      name: 'Support',
      id: useId(),
      list: [
        {
          name: 'Contact us',
          link: 'contacts',
          id: useId()
        },
        {
          name: 'FAQ',
          link: 'faq',
          id: useId()
        },
        {
          name: 'Terms of Service',
          link: 'terms',
          id: useId()
        },
        {
          name: 'Privacy Policy',
          link: 'policy',
          id: useId()
        },
      ]
    },
  ]
  const socials = [
    {
      link: 'https://twitter.com/',
      Img: Twitter,
      id: useId()
    },
    {
      link: 'https://www.instagram.com/',
      Img: Instagram,
      id: useId()
    },
    {
      link: 'https://www.facebook.com/',
      Img: Facebook,
      id: useId()
    },
  ]

  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__top__wrapper">
          <div className="footer__top__motto">
            Landing is a network of furnished apartments for rent across the country.
          </div>
          <div className="footer__top__menu">
            {menu.map(({name, id, list}) => (
              <div
                key={id}
                className="footer__top__menu__item"
              >
                <div className="footer__top__menu__header">
                  {name}
                </div>
                <ul>
                  {list.map(({name, id, link}) => (
                    <li key={id}>
                      <a href={link}>{name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom__wrapper">
          <div className="footer__bottom__copyright">
            © Landing 2021. All rights reserved.
          </div>
          <a
            href="tel:+4152311701"
            className="footer__bottom__tel"
          >415-231-1701</a>
          <div className="footer__bottom__socials">
            {socials.map(({link, Img, id}) => (
              <a
                key={id}
                href={link}
                className="footer__bottom__socials__item"
              >
                <Img />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}