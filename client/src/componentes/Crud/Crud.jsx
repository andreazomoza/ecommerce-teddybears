import React,{Component, Link, useState} from 'react'
import './Crud.css'

//esta es la forma sin redux que es la mas facil, voy a intentar hacerlo 
//con el redux hell 
export default function Crud (){

  const [nombre, SetNombre] = useState("")
  const [descripcion, SetDescripcion] = useState("")
  const [precio, SetPrecio] = useState("")
  const [img, SetImg] = useState("")

  const onSubmitForm = async(e)=>{
    e.preventDefault()
    try{
      const body = {nombre, descripcion, precio, img}
      console.log(body);
      const responde = await fetch("http://localhost:3000/products/agregarprod",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
      
     });
     console.log(responde);
    }catch(err){
      console.error(err.message)
    }
    
  }
  return(
    <div>soy un crud sin redux
      <form className="form-container" action="" onSubmit={onSubmitForm}>
        <p><label>Nombre </label></p>
        <p><input type="text" value={nombre} onChange={e => SetNombre(e.target.value)}></input></p>
        <p><label>descripcion </label></p>
        <p><input type="text" value={descripcion} onChange={e => SetDescripcion(e.target.value)}></input></p>
        <p><label>precio </label></p>
        <p><input type="text" value={precio} onChange={e => SetPrecio(e.target.value)}></input></p>
        <p><label>img </label></p>
        <p><input type="text" value={img} onChange={e => SetImg(e.target.value)}></input></p>
        
        <button>AGREGAR</button>
      </form>
    </div>
  )
}

