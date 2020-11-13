import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const CardItem = ({ url, src, alt, title }) => (
  <article className="post-card">
    <Link to={url} className="card-link">
      <figure className="post-thumbnail">
        <img src={src} alt={alt} className="thumbnail" />
      </figure>
      <div className="post-content">
        <h5 className="title">{title}</h5>
      </div>
    </Link>
  </article>
)

export default CardItem
