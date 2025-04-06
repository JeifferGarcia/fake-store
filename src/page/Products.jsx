import { useEffect, useState } from 'react';
import { useDiscounts } from '../context/DiscountsContext';
import Card from '../components/Card';

function Products() {
  const [products, setProducts] = useState([]);
  const { discounts } = useDiscounts();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const setDiscounts = (price) => {
    if (!discounts) return null;

    const discountAmount = price * (discounts / 100);
    return +(price - discountAmount).toFixed(2);
  }

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
              discount={setDiscounts(product.price)}
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
