import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Inicio from './components/Inicio';
import ProductoDetallado from './components/ProductoDetallado';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/producto/:id' element={<ProductoDetallado />}></Route>
          <Route path='*' element={<NotFound/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
