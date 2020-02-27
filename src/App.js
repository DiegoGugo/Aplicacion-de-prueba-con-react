import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Conditionals from './sections/Conditionals';
import Listas from './sections/Listas';
import ListasConObjetos from './sections/ListasConObjetos';
import Buttons from './sections/Buttons';
import Forms from './sections/Forms';
import Childrens from './sections/Childrens';
import FetchExample from './sections/FetchExample';
import EjemploDeCicloDeActualizacion from './sections/life-cycle/componentWillRecieveProps';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Hello(props) {
  const { text } = props;
  return (
    <h2>{props.title}</h2>
  );
}


class Text extends Component {
  render() {
    const {
      boolean,
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      number,
      title
    } = this.props;
    const textoSegunBool = boolean ? 'Cierto' : 'Falso';
    const mappedNumbers = arrayOfNumbers.map(n => n * 2);
    return (
      <div>
        <p className='App-link'>{this.props.text}</p>
        <p>{number}</p>
        <p>{boolean}</p>
        <p>{textoSegunBool}</p>
        <p>{arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
        <p>{multiply(4)}</p>
        <p>{title}</p>
      </div>
    );
  }
}

class Props extends Component {
  render() {
    return (
      <h3>{this.props.text}</h3>
    );
  }
}

Props.defaultProps = {
  text: 'Soy un titulo por defecto'
}//agregar props por defecto

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 10 };
    setInterval(() => {
      this.setState({ contador: this.state.contador - 1 })
    }, 100000000)
  }

  render() {
    return (
      <span>{this.state.contador}</span>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.❤
          <Hello title='hola morros'></Hello>
          <Text
            arrayOfNumbers={[2, 3, 10]}
            objectWithInfo={{ key: 'value', key2: 'otherValue' }}
            number={2}
            multiply={(number) => number * 2}
            text='Texto en string'
            title={<h1>Este es el titulo del componente Text</h1>}
            boolean={false}
          ></Text>
          <Props></Props>
          <Contador></Contador>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div>
          <Conditionals muestra={false}></Conditionals>
        </div>
        <div>
          <Listas></Listas>
        </div>
        <div>
          <ListasConObjetos></ListasConObjetos>
        </div>
        <div>
          <Buttons></Buttons>
        </div>
        <div>
          <Forms></Forms>
        </div>
      </header>
      <div>
        <Childrens></Childrens>
      </div>
      <div>
        <FetchExample></FetchExample>
      </div>
      <div>
        <EjemploDeCicloDeActualizacion></EjemploDeCicloDeActualizacion>
      </div>
    </div>
  );
}


