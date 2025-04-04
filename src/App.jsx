import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './page/Home';
import Products from './page/Products';
import Discounts from './page/Discounts';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/discounts" element={<Discounts />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App