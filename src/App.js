import './App.css';
import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a mi tienda"} />
    </div>
  );
}

export default App;
