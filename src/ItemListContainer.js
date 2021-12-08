


import React from 'react'
import './App.css'
import { useState,  useEffect } from 'react';
import {getFetch} from  './ListaProductos';

import { useParams, Link} from 'react-router-dom';  //es un Hub: en este caso UseParams : que me sirve para Capturar los parametros
//que defina en la ruta





function ItemListContainer() {
  const [ producto , setProducto] = useState([])
  const [ cargando, paraCargando] = useState(true)   //se inicializa con cargando(true) y finaliza con paraCargando(false)


  const {idcategoria} = useParams()  //capturo como le asigne el nombre al parametro , para asi capturar
  // la categoria

  useEffect(() => {
  
  //if (idcategoria) esta definido : muestrame los productos de la categoria filtrado 'filter'
  //Filter: me trae una array nuevo con los productos que se filtren
    if (idcategoria) {
      getFetch
      .then(data =>{
        //lamo a la appi
        setProducto(data.filter(prod => prod.categoria === idcategoria))
    
      })
      .catch(e => console.log(console.error))
      .finally(() => paraCargando(false))
      
    } else {  //else ((idcategoria): no esta definido : osea esta undefind) muestrame todos los productos
      getFetch
      .then(data =>{
        //lamo a la appi
        setProducto(data)
    
      })
      .catch(e => console.log(console.error))
      .finally(() => paraCargando(false))
  
     
    }

  
  },[idcategoria])
 

  return (
  
      <div className="App">
       {
         cargando ?  <h1>CARGANDO...</h1> :   producto.map( pro => <div key={pro.id}  className="card w-50 mt-5  row">

       <div className="card-header">
       { pro.nombre}
       {pro.categoria}
     </div>
     <div className="card-body">
       < img src={pro.foto} alt="fto" className='imagenes'/>
       {pro.precio}
       
     </div>
    <div  className="card-footer">
      
      <Link to={`/detalle/${pro.id}`}>
      <button className="btn btn-outline-primary btn-block">
        DETALLE PRODUCTO
      </button>
      </Link>
    
    </div>     

                  </div>
       )}
 </div>
      
   
  )
}

export default ItemListContainer




