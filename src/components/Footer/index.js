import React from 'react'
import { Button } from 'components/Button'
import { Link } from 'react-router-dom'

import './Footer.css'
import data from './data'

const Footer = () => (
  <>
    <footer>
      <section className="subscription">
        <h2 className="subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </h2>
        <h3 className="subscription-text">You can unsubscribe at any time.</h3>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn-outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section className="footer-links">
        <div className="footer-links-wrapper">
          {data.map(({ title, links }, index) => (
            <div className="link-items" key={index}>
              <h2>{title}</h2>
              {links.map(({ title, url, className }, index) => (
                <Link to={url} key={index}>
                  {className && <i className={className} />}
                  {title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>
    </footer>
    <div className="copy-right">
      <small>Angelilton © 2020</small>
    </div>
  </>
)

export default Footer
