import React, { Component } from 'react';
 
export default class Form extends Component{
    constructor(){
        super();
        this.state={MejorForma:'Hola'}
    }
    handleClick=(e)=>{
        e.preventDefault()//este metodo evita que el boton envie la informacióm
        /*const name=document.getElementById('name').value;
        const email=document.getElementById('email').value;
        const algo=this.inputAlgo.value; //utilizar ref tambien es una forma para recupera valores de los formularios pero no es la mejor opción
        console.log({name, email, algo});        */
        console.log(this.state);

    }
    handleChange=(e)=>{
        e.target.checked ? alert('ME llamaste perro') : alert('Entonces adios');                
    }
    render(){
        return(
            <div>
                <h4>Formulario</h4>
                <form onSubmit={this.handleClick}>{/* onSubmit hace lo mismo que onClick*/}
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input 
                        id='name'
                        name='userName'
                        placeholder='Ingresa tu nombre'
                        />
                    </p>
                    <p>
                        <label>Correo: </label>
                        <input 
                        id='email'
                        name='userEmail'
                        placeholder='Ingresa tu correo'
                        />
                    </p>
                    <p>
                        <label htmlFor='algo'>Cuentame algo: </label>
                        <input 
                        id='algo'
                        name='userAlgo'
                        placeholder='Ingresa algo'
                        ref={inputElement=> this.inputAlgo=inputElement}
                        />
                    </p>
                    <p>
                        <label>Chequeame</label>
                        <input type='checkbox' onChange={this.handleChange}></input>
                    </p>
                    <p>
                        <label>Mejor forma</label>
                        <input 
                        value={this.state.MejorForma}
                        onChange={(e)=>this.setState({MejorForma: e.target.value})}
                        placeholder='Escribe algo'
                        />
                    </p>
                    <button onClick={this.handleClick}>🤘Enviar🤘</button>
                </form>
            </div>
        );
    }
}