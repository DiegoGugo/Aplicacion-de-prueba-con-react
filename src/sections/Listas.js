import React, { Component } from 'react';

export default class Listas extends Component {
    render() {
        const numbers = [1, 1, 2, 3, 4];
        return (
            <div>
                <h4>Trabajando con listas</h4>
                {numbers.map((n, i) => {
                    return <p key={i}>Soy el numero {n}</p>
                })}
            </div>
        );
    }
}