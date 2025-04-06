import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './page/Home';
import Products from './page/Products';
import Discounts from './page/Discounts';
import Detail from './page/Detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Detail />}/>
        <Route path="/discounts" element={<Discounts />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App