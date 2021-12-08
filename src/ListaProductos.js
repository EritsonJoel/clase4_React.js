 //PROMESAS Y ASINCRONIA
 export const ListaProductos = [


    {id: 1, foto:'https://home.ripley.com.pe/Attachment/WOP_5/2025250665203/2025250665203_2.jpg',name:'Puma1', precio: 200 ,categoria: 'Nike'},
    {id: 2, foto:'https://home.ripley.com.pe/Attachment/WOP_5/2025250665203/2025250665203_2.jpg' ,name:'Puma2',precio: 200,categoria: 'Nike'},
    {id: 3, foto:'https://home.ripley.com.pe/Attachment/WOP_5/2025250665203/2025250665203_2.jpg',name:'Puma3' ,precio: 200,categoria: 'Puma'},
    {id: 4, foto:'https://home.ripley.com.pe/Attachment/WOP_5/2025250665203/2025250665203_2.jpg' ,name:'Puma4',precio: 200,categoria: 'Puma'},
    {id: 5, foto:'https://home.ripley.com.pe/Attachment/WOP_5/2025250665203/2025250665203_2.jpg',name:'Puma5',precio: 200,categoria: 'Adidas'},
  ]
  

  
//collbak: es una funcion pasada por parametro
   export    const  getFetch = new Promise((aceptado, rechazado )=>{  //instaciamos un objeto y le pasamos una collbak y recibe dos parametros que voy a nombre
    //aparte de ser dos parametros , tambien seran una funcion
  
  
    setTimeout(() =>{
      aceptado(ListaProductos)
    }, 3000)
  })

  
export const getFetchUno = new Promise((aceptado)=>{
    //Acciones todo ok 
    setTimeout(() => {
        aceptado(ListaProductos)        
    }, 3000);
    //rechazada('400 not found')
})
  