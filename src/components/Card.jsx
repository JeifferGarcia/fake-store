import React from 'react';

function Card({ src, title, description, id, price }) {

  const setDescription = (text) => `${text.substr(0, 155)}...`
  return (
    <>
      <div key={id} className="card h-100">
        <img
          src={src}
          className="card-img-top img-fluid p-3"
          alt={title}
          style={{
            height: '200px',
            objectFit: 'contain'
          }}
        />
        <div className="card-body">
          <h5 className="card-title text-muted">{title}</h5>
          <h5 className="card-subtitle my-2 ">${price}</h5>
          <p className="card-text">{setDescription(description)}</p>
          <div className="text-center">
            <a href="#" className="btn btn-dark">Mas Información</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
