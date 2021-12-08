import React from 'react'
import { Col, Row } from 'react-bootstrap'


export const ItemDetails = ({item}) => {

    console.log('este es el prop de item')
    
    return (
        <Row>
        <label>Soy el detalle</label>
        <Col>                
            <div className='card w-50'>
                <div className="container">
                    <label>{item.name}</label>
                </div>
                <div className="container">
                    <img  src={item.foto} className="w-25" alt="foto" />
                    <br/>
                    <label>{item.categoria}</label>
                </div>
                <div className="container">
                    <label>{item.precio}</label>
                </div>
            </div>
        </Col>
        
    </Row>

    )
}
