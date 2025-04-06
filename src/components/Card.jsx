import { Link } from "react-router-dom";

function Card({ src, title, description, id, price, discount }) {

  const setDescription = (text) => `${text.substr(0, 155)}...`
  return (
    <>
      <div className="card h-100">
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
          <h5 className="card-title text-muted ">{title}</h5>
          <h5 className={`card-subtitle my-2 ${discount ? 'line text-danger': ''}`}>${price}</h5>
          { discount && (
            <h5 className="card-subtitle my-2">${discount}</h5>
          )}
          <p className="card-text">{setDescription(description)}</p>
          <div className="text-center">
            <Link to={`/products/${id}`} className="btn btn-dark">Ver más</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
