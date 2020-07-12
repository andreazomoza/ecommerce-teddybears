import React from 'react'
import {connect} from 'react-redux'
import './Login.css';
import Title from './components/title/Title'
import Label from './components/Label/Label'
import Input from './components/Input/Input'

const Login = () => {
    
    function handleChange(name,value){
        if (name==='usuario'){
            
        }
    }

    return(
        <div className='login-container'>
            <Title text='soy un titulo'/>
            <Label text='usuario'/>
            <Input/>            />
            <Label text='contraseña'/>
            <Input/>

        </div>
    );
}



export default Login;