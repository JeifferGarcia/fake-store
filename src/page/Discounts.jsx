import { useDiscounts } from "../context/DiscountsContext";

function Discounts() {
  const { setDiscounts } = useDiscounts();
  const discounts = [
    { text: '5%', value: 5 },
    { text: '10%', value: 10 },
    { text: '15%', value: 15 },
    { text: '20%', value: 20 },
    { text: '30%', value: 30 },
  ]

  const handleChange = ((event) => {
    const { value } = event.target;
    const discount = !Number.isNaN(parseInt(value, 10))
      ? parseInt(value, 10)
      : null;

    setDiscounts(discount);
  })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Descuentos</h2>

            <div className="input-group mb-3">
              <select onChange={handleChange}>
                <option selected>Seleccionar un cupón de descuento</option>
                { discounts.map((discount) => (
                  <option value={discount.value}>{discount.text}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Discounts;
