import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux' ;
import {link} from 'react-router-dom';
//import 'Productos.css'

export default function Productos(){
    const [todos, setTodos]=useState([])
    const getTodos = async () => {
        try{
            const response = await fetch("http://localhost:3000/pern");
            const jsonData = await response.json();
            setTodos(jsonData);
        }catch (err){
            console.error(err.message);
        }
    }
    
    useEffect(()=> {
        getTodos();
    },[]);
    
    let todos2 = (JSON.stringify(todos));
    console.log(todos);
    console.log(todos2+'todos2');
    return(
        <Fragment><div>soy productos</div>
            <table class="table mt-5 text-center">
                <thead>
                <tr>
                    <th>nombre</th>
                    <th>descripcion</th>
                    <th>imagen</th>
                    <th>agregar</th>
                    <th>borrar</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todo=>(
                        <tr>
                            <td>{todo.nombre}</td>
                            <td>{todo.descripcion}</td>
                            <td><img src={todo.img} alt=""/></td>
                        </tr>
                       
                    ))}
                </tbody>
            </table>
        </Fragment>
        

    )

};