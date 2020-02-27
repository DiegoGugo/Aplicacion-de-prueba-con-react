import React, { Component } from 'react';
import '../App.css'

export default class Buttons extends Component {
    constructor() {
        super();
        this.state = { mouseX: 0, mouseY: 0 }
    }
    handleClick=(e)=> {
        //esto sirve para que todos los navegadores que sean compatibles con react puedan ejecutar si funcion
        //basdicamente es para no tener problemas de compatibilidad de lo contrario GG
        console.log(e);
        console.log(e.nativeEvent);
        alert('Estoy aqui!');
    }
    handleMove =(e)=> {
         const {clientX, clientY}=e;
         this.setState({mouseX:clientX, mouseY: clientY})
    }
    render() {
        return (
            <div>
                <h2>Eventos</h2>
                <button className='Button' onClick={this.handleClick}>Aprietame💋</button>
                <div
                    onMouseMove={this.handleMove}
                    style={{
                        border: '1px solid #000',
                        marginTop: 10,
                        padding: 10,
                        backgroundColor:'#fff',
                        color:'#000'
                    }}
                >
                    <p>{this.state.mouseX}</p>
                </div>
            </div>
        );
    }
}