import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Detail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const URL = `https://fakestoreapi.com/products/${id}`;

      await fetch(URL)
        .then((res) => res.json())
        .then((json) => setProduct(json))
    };

    getProduct();
  }, [id])

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="col-12 col-lg-6">
            <div className="card">
              <img
                className="card-img-top img-fluid p-4"
                src={product.image}
                alt={product.title}
                style={{
                  height: '40rem',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <h1>{product.title}</h1>
            <h4>${product.price}</h4>
            <hr />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail;
