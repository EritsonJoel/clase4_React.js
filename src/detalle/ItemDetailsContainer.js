import React from 'react'
import { useEffect, useState } from 'react';
import {getFetchUno} from '../ListaProductos'; 
import { useParams } from 'react-router-dom';
import { ItemDetails } from './ItemDetails';

function ItemDetailsContainer() {

    const [productoIndividual , setProducto] = useState({});
    const  [loading , setLoading] = useState(true);
    const  {idcategoria} = useParams();
 
    useEffect(()=>{

  // hago la promesa para  obtener  la id de la url 

    getFetchUno
    .then(data =>{ //obtengo la respuesta de la promesa
        console.log('correcto')
     setProducto(data.find(prod => prod.id === idcategoria)) // aki  la data de la respuesta de la promesa se guarda en la variable setProductoIndividual para que 
     //sea persistente
    })
   .catch(err => console.log(err))
   .finally(() =>setLoading(false))

    }, [idcategoria])


    console.log(productoIndividual)



    return (
        <>
               <p style={{fontSize: 20, color: "black"}}> 
 Lista </p>
    
            {loading    ? <h1>Está ejecutandose la promesa del detalle</h1>  : 

            <ItemDetails  item={productoIndividual}/>
    
            }
     
        </>
    )
}

export default ItemDetailsContainer
