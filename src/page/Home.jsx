import { useEffect, useState } from 'react';
import { useDiscounts } from '../context/DiscountsContext';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';

function Home() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setDiscount, discount } = useDiscounts();

  useEffect(() => {
    const getProduct = async () => {
      const id = Math.floor(Math.random() * 20) + 1;
      setIsLoading(true);
      const URL = `https://fakestoreapi.com/products/${id}`;

      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-5 fw-bold">Producto Destacado</h2>

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
          <h4 className={`${discount ? 'line text-danger': 'text-success'} fw-semibold mt-3`}>
            ${product.price}
          </h4>
          { discount && (
            <h4 className='text-success fw-semibold mt-3'>
              ${setDiscount(product.price)} <strong className="text-success fw-semibold">{discount}% descuento</strong>
            </h4>
          )}
            <hr />

          <Link to={`/products/${product.id}`} className="btn btn-primary mt-3">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
