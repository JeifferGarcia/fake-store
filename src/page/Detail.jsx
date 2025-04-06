import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDiscounts } from '../context/DiscountsContext';

import Loading from '../components/Loading';

function Detail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { discount, setDiscount } = useDiscounts();

  useEffect(() => {
    setIsLoading(true);
    const getProduct = async () => {
      const URL = `https://fakestoreapi.com/products/${id}`;

      await fetch(URL)
        .then((res) => res.json())
        .then((json) => setProduct(json))
        .finally(() => setIsLoading(false));
    };

    getProduct();
  }, [id]);

  if (isLoading) return <Loading />

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
            <h1 className="text-warning">{product.title}</h1>
            <div className="mt-5">
              <h4 className={`${discount ? 'line text-danger': ''}`}>${product.price}</h4>
                { discount && (
                  <h4>${setDiscount(product.price)} <strong className="text-success">{discount}% descuento</strong></h4>
                )}
            </div>
            <hr />
            <p >{product.description}</p>
            <hr />
            <div>
              <a className="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail;
