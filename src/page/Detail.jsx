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
      <div className="container my-5">
            <div className="row align-items-center shadow p-4 rounded bg-light">
              <div className="col-md-6 text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </div>

              <div className="col-md-6 mt-4 mt-md-0">
                <h3 className="fw-bold">{product.title}</h3>
                <p className="text-muted" style={{ maxHeight: '150px', overflow: 'auto' }}>
                  {product.description}
                </p>

                <p className="text-end">Calificación {product.rating.rate}</p>
                <p className="text-end">{product.rating.count} review</p>

                <h4 className={`${discount ? 'line text-danger': 'text-success'} fw-semibold mt-3`}> ${product.price}</h4>
                { discount && (
                  <h4 className='text-success fw-semibold mt-3'>$ {setDiscount(product.price)} <strong className="text-success fw-semibold">{discount}% descuento</strong></h4>
                )}
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
