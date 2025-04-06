import { useEffect, useState } from 'react';
import { useDiscounts } from '../context/DiscountsContext';
import Card from '../components/Card';

function Products() {
  const [products, setProducts] = useState([]);
  const { setDiscount } = useDiscounts();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);



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
