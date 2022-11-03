import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from "./CartContext/CartContext"
import Checkout from './Components/Checkout/Checkout';


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>  
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<img className='img404' alt='img-404' src='https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg'></img>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>

  );
}

export default App;
