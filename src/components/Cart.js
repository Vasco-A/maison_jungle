import Plant from './Plant'

function Cart() {
  const monsteraPrice = 8;
  const lierrePrice = 10;
  const bdfPrice = 15;
  const total = monsteraPrice + lierrePrice + bdfPrice;
  
  return (
    <div>
      <h2> Panier </h2>
      <ul>
        <li> <Plant name="Monstera" price={monsteraPrice} /> </li>
        <li> <Plant name="Lierre" price={lierrePrice} /> </li>
        <li> <Plant name="Fleurs" price={bdfPrice} /> </li>
      </ul>
      Total : {total}€
    </div>
  );
}

export default Cart