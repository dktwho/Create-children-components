import './App.css';
import Product from './Product';
import { nanoid } from 'nanoid'

function App() {
  function id() {
    return nanoid()
  }
  const name1 = 'product 1';
  const cost1 = 100;

  const name2 = 'product 2';
  const cost2 = 200;

  const name3 = 'product 3';
  const cost3 = 300;

  const prods = [
    {id: id(), name: 'product1', cost: 100},
    {id: id(), name: 'product2', cost: 200},
    {id: id(), name: 'product3', cost: 300},
  ];

  const result = prods.map((prod) => {
    return <Product key={prod.id} name={prod.name} cost={prod.cost}></Product>
  })


  return (
    <div className="App">
      <Product name={name1} cost={cost1} />
      <Product name={name2} cost={cost2} />
      <Product name={name3} cost={cost3} />
      <br />
      <hr />
      <Product name={prods[0].name} cost={prods[0].cost} />
      <Product name={prods[1].name} cost={prods[1].cost} />
      <Product name={prods[2].name} cost={prods[2].cost} />
      <br />
      <hr />
      {result}



    
    </div>
  );
}

export default App;
