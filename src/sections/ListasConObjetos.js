import React, {Component} from 'react';
import cars from '../data/cars.json';

export default class ListasConObjetos extends Component {
    render() {
        return (
            <div>
                <h4>Trabajando con listas de objetos</h4>
                <ul>
                    {cars.map((car) => {
                        return (
                            <li key={car.id}>
                                {/* las key siempre tienen que estar en el componente en el que se usan */}
                                <p key={car.name}>Nombre: {car.name}</p>                                
                                <p key={car.company}>Marca: {car.company}</p>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        );
    }
}