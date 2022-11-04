import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Administrador from './components/views/Administrador';
import DetalleReceta from './components/views/DetalleReceta';
import CrearReceta from './components/views/receta/CrearReceta';
import EditarReceta from './components/views/receta/EditarReceta';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import './components/app.css'
import Login from './components/views/Login';
import Registrar from './components/views/Registrar';

function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route exact path='/detalle-receta/:id' element={<DetalleReceta></DetalleReceta>}></Route>
      <Route exact path='/administrar/crear' element={<CrearReceta></CrearReceta>}></Route>
      <Route exact path='/administrar/crear' element={<CrearReceta></CrearReceta>}></Route>
      <Route exact path='/administrar/editar/:id' element={<EditarReceta></EditarReceta>}></Route>
      <Route exact path='/login' element={<Login></Login>}></Route>
      <Route exact path='/registrar' element={<Registrar></Registrar>}></Route>
      <Route exact path='/menu' element={<Menu></Menu>}></Route>
      <Route exact path='/footer' element={<Footer></Footer>}></Route>
      <Route exact path='*' element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
