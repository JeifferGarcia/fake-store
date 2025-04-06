import { useEffect, useState } from 'react';
import { useDiscounts } from '../context/DiscountsContext';
import Card from '../components/Card';
import Loading from '../components/Loading';

function Products() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { setDiscount } = useDiscounts();

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setIsLoading(false));
  }, []);


  if (isLoading) return <Loading />

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-lg-4 d-flex align-items-stretch mb-4"
          >
            <Card
              key={product.id}
              id={product.id}
              discount={setDiscount(product.price)}
              price={product.price}
              title={product.title}
              src={product.image}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
