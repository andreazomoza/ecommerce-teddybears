import React,{Component, Link} from 'react'
import './Card.css'


export default function Card ({id, nombre, descripcion, precio, img}){
  return(
    <div key={id} className="card-body" >
        <h3>{nombre}</h3>
        <p><img src={img} alt="img" width="100"/></p>
        <h5>{descripcion}</h5>
        <h2>${precio}</h2>
        <button type="button">Add Cart</button>
    </div>
  )
}

