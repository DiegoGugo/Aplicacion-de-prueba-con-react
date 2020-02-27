import React, { Component } from 'react';

class ConditionalA extends Component {
    render() {
        return (
            <h3>Soy el componente A</h3>
        );
    }
}

class ConditionalB extends Component {
    render() {
        return (
            <h3>Soy el componente B</h3>
        );
    }
}

export default class Conditionals extends Component {
    constructor() {
        super()
        this.state = { mostrar: false }
    }

    render() {

        const { muestra } = this.props;

        return (
            <div>
                <h2>Renderizando condicionales</h2>
                {/*this.state.mostrar*/ muestra ? <ConditionalB /> : <ConditionalA />}
            </div>
        );
    }
}