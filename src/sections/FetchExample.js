/* import React, { Component } from 'react';

export default class FetchExample extends Component {
    constructor(props) {
        super(props);
        this.state = { bpi: {} };
    }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                const { bpi } = data;
                this.setState({ bpi })                         
            })
    }

    _renderCurrencies() {
        const { bpi } = this.state;
        console.log(bpi);
        console.log(Object.keys(bpi));
        const currentcies = Object.keys(bpi);
        return currentcies.map(currency => (
            <div key={currency}>
                Un BTC es {bpi[currency].rate}{' '}
                <span>{currency}</span>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <h4>Bitcoin Price</h4>
                {this._renderCurrencies()}
            </div>
        );
    }
} */


 
import React, { useState, useEffect } from 'react';

export default function FetchExample(props) {

    const [Abpi, setBpi] = useState({ bpi: {} });

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {                
                setBpi(data.bpi);                
            })
    }, [])


    function renderCurrencies() {
        const bpi = Abpi;         
        const currentcies = Object.keys(bpi);               
        return currentcies.map(currency => (
            <div key={currency}>
                Un BTC es {bpi[currency].rate}{' '}
                <span>{currency}</span>
            </div>
        ))
    };

    return (
        <div>
            <h4>Bitcoin Price</h4>
            {renderCurrencies()}
        </div>
    );

}