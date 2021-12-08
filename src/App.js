
import './App.css';

import {BrowserRouter, Routes, Route} from  'react-router-dom'
import ItemListContainer from './ItemListContainer'
import Cart from './Cart';
import ItemDetailsContainer from './detalle/ItemDetailsContainer';

function App() {



  
 
 //<BrowserRouter>: es para el Enrutado : nos da el ambito de donde se hara el enrutado
//<Routes> : iran en los componentes que seran enrutados: osea tengo un Producto, presiona y me dirige a su detalle

 
//componente: es la definicion de la funcion.
//elemento: es el llamado de esa funcion


//:idcategoria:  declarando parametros 
  return (

    <BrowserRouter>  
    <Routes>
   
   
   <Route  exact path='/'  element={ <ItemListContainer/>}/> 
  <Route  exact path='/cart'  element={<Cart/>}/>
  <Route  exact path='/detalle'  element={ <ItemDetailsContainer/>}/> 
  <Route  exact path='/categoria/:idcategoria'  element={ <ItemListContainer/>}/> 
 </Routes>
    </BrowserRouter>
 
  );
}

export default App;
