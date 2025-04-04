import React from 'react';

function Card({ src, title, description, id }) {
  return (
    <>
      <div key={id} className="card">
        <img src={src} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn">Another link</a>
        </div>
      </div>
    </>
  )
}

export default Card;
