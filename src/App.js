import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Todos los productos"}/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>  
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='*' element={<img alt='img-404' src='https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg'></img>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
